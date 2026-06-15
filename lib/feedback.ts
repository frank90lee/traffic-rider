import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface FeedbackData {
  name: string
  email: string
  title: string
  content: string
  category: string
}

interface FeedbackMeta {
  id: string
  title: string
  status: 'open' | 'in-progress' | 'closed'
  date: string
  lastModified: string
  path: string
  category: string
  author: {
    name: string
    email: string
  }
}

export async function createFeedback(feedback: FeedbackData) {
  // Cloudflare Pages doesn't support fs at runtime
  if (process.env.NEXT_RUNTIME === 'edge' || !fs.writeFileSync) {
    console.warn('Feedback submission is not supported on Edge runtime');
    return {
      id: `mock-${Date.now()}`,
      title: feedback.title,
      status: 'open',
      date: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      path: '',
      category: feedback.category,
      author: {
        name: feedback.name,
        email: feedback.email
      }
    };
  }

  // 1. 生成唯一ID
  const id = `feedback-${Date.now()}`
  
  // 2. 创建markdown内容
  const frontMatter = {
    title: feedback.title,
    status: 'open',
    date: new Date().toISOString(),
    lastModified: new Date().toISOString(),
    category: feedback.category,
    author: {
      name: feedback.name,
      email: feedback.email
    }
  }
  
  const fileContent = matter.stringify(feedback.content, frontMatter)
  
  // 3. 保存.md文件
  const mdPath = path.join(process.cwd(), 'data', 'feedback', `${id}.md`)
  fs.writeFileSync(mdPath, fileContent)
  
  // 4. 更新feedback.json
  const indexPath = path.join(process.cwd(), 'data', 'json', 'feedback.json')
  const feedbackList = JSON.parse(fs.readFileSync(indexPath, 'utf8'))
  const newFeedback: FeedbackMeta = {
    id,
    title: feedback.title,
    status: 'open',
    date: frontMatter.date,
    lastModified: frontMatter.lastModified,
    path: `data/feedback/${id}.md`,
    category: feedback.category,
    author: {
      name: feedback.name,
      email: feedback.email
    }
  }
  
  feedbackList.unshift(newFeedback) // 新反馈放在前面
  fs.writeFileSync(indexPath, JSON.stringify(feedbackList, null, 2))
  
  return newFeedback
}

export function getFeedbackList(): FeedbackMeta[] {
  const indexPath = path.join(process.cwd(), 'data', 'json', 'feedback.json')
  if (process.env.NEXT_RUNTIME === 'edge' || !fs.readFileSync) {
    return [];
  }
  return JSON.parse(fs.readFileSync(indexPath, 'utf8'))
}

export function getFeedbackDetail(id: string) {
  const mdPath = path.join(process.cwd(), 'data', 'feedback', `${id}.md`)
  if (process.env.NEXT_RUNTIME === 'edge' || !fs.readFileSync) {
    return null;
  }
  const fileContent = fs.readFileSync(mdPath, 'utf8')
  const { data, content } = matter(fileContent)
  
  // 解析评论
  const comments = content.split('## Comments')[1]?.split('---')
    .filter(Boolean)
    .map(comment => {
      const [meta, content] = comment.split('\n\n')
      const commentData = matter(meta).data
      return {
        author: commentData.author,
        date: commentData.date,
        content: content.trim()
      }
    }) || []
    
  return {
    ...data,
    content: content.split('## Comments')[0].trim(),
    comments
  }
} 