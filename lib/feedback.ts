import matter from 'gray-matter'

interface FeedbackData {
  name: string
  email: string
  title: string
  category: string
  content: string
}

export interface FeedbackMeta {
  id: string
  title: string
  status: 'open' | 'closed'
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
  if (process.env.NEXT_RUNTIME === 'edge') {
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

  // Use dynamic require to avoid webpack error on edge
  const fs = eval('require("fs")');
  const path = eval('require("path")');

  // 1. 生成唯一ID
  const id = `feedback-${Date.now()}`
  const date = new Date().toISOString()

  // 2. 准备Markdown内容
  const mdContent = matter.stringify(feedback.content, {
    id,
    title: feedback.title,
    status: 'open',
    date,
    lastModified: date,
    category: feedback.category,
    author: {
      name: feedback.name,
      email: feedback.email
    }
  })

  // 3. 写入Markdown文件
  const mdDir = path.join(process.cwd(), 'data', 'feedback')
  if (!fs.existsSync(mdDir)) {
    fs.mkdirSync(mdDir, { recursive: true })
  }
  fs.writeFileSync(path.join(mdDir, `${id}.md`), mdContent)

  // 4. 更新索引文件
  const indexPath = path.join(process.cwd(), 'data', 'json', 'feedback.json')
  const indexDir = path.dirname(indexPath)
  if (!fs.existsSync(indexDir)) {
    fs.mkdirSync(indexDir, { recursive: true })
  }

  let indexData: FeedbackMeta[] = []
  if (fs.existsSync(indexPath)) {
    indexData = JSON.parse(fs.readFileSync(indexPath, 'utf8'))
  }

  indexData.unshift({
    id,
    title: feedback.title,
    status: 'open',
    date,
    lastModified: date,
    path: `data/feedback/${id}.md`,
    category: feedback.category,
    author: {
      name: feedback.name,
      email: feedback.email
    }
  })

  fs.writeFileSync(indexPath, JSON.stringify(indexData, null, 2))

  return indexData[0]
}

export function getFeedbackList(): FeedbackMeta[] {
  if (process.env.NEXT_RUNTIME === 'edge') {
    return [];
  }
  const fs = eval('require("fs")');
  const path = eval('require("path")');
  const indexPath = path.join(process.cwd(), 'data', 'json', 'feedback.json')
  if (!fs.existsSync(indexPath)) return [];
  return JSON.parse(fs.readFileSync(indexPath, 'utf8'))
}

export function getFeedbackDetail(id: string) {
  if (process.env.NEXT_RUNTIME === 'edge') {
    return null;
  }
  const fs = eval('require("fs")');
  const path = eval('require("path")');
  const mdPath = path.join(process.cwd(), 'data', 'feedback', `${id}.md`)
  if (!fs.existsSync(mdPath)) return null;
  const fileContent = fs.readFileSync(mdPath, 'utf8')
  const { data, content } = matter(fileContent)
  return {
    ...data,
    content
  }
}
