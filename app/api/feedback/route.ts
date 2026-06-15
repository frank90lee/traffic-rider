import { NextResponse } from 'next/server'

export const runtime = "edge";

import { createFeedback, getFeedbackList, getFeedbackDetail } from '@/lib/feedback'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const feedback = await createFeedback(data)
    return NextResponse.json({ success: true, feedback })
  } catch (error) {
    console.error('Error creating feedback:', error)
    return NextResponse.json(
      { error: 'Failed to create feedback' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (id) {
      const feedback = getFeedbackDetail(id)
      return NextResponse.json(feedback)
    }
    
    const feedbackList = getFeedbackList()
    return NextResponse.json(feedbackList)
  } catch (error) {
    console.error('Error fetching feedback:', error)
    return NextResponse.json(
      { error: 'Failed to fetch feedback' },
      { status: 500 }
    )
  }
} 