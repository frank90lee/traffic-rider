'use client'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface FeedbackItem {
  id: string
  title: string
  status: string
  category: string
  date: string
  author: {
    name: string
  }
}

interface FeedbackListProps {
  feedbackItems: FeedbackItem[]
}

export default function FeedbackList({ feedbackItems }: FeedbackListProps) {
  return (
    <div className="space-y-4">
      {feedbackItems.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>
                  由 {item.author.name} 提交于 {new Date(item.date).toLocaleDateString()}
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 text-xs rounded-full bg-gray-100">
                  {item.category}
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-100">
                  {item.status}
                </span>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
} 