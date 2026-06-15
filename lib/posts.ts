import { remark } from 'remark'
import html from 'remark-html'
import { PostData } from '@/types/Index'
import { postsData } from './data-cache'

export function getSortedPostsData() {
  const allPostsData: {
    id: string;
    title: string;
    description: string;
    date: string;
    locale: string;
  }[] = [];
  
  Object.keys(postsData).forEach(locale => {
    Object.keys(postsData[locale]).forEach(slug => {
      const { data } = postsData[locale][slug];
      allPostsData.push({
        id: slug,
        title: (data.title as string) || '',
        description: (data.description as string) || '',
        date: (data.date as string) || '',
        locale
      });
    });
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostData(locale: string, slug: string): Promise<PostData> {
  const post = postsData[locale]?.[slug];
  
  if (!post) {
    throw new Error(`Post not found: ${locale}/${slug}`);
  }

  const { data, content } = post;

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    title: (data.title as string) || '',
    description: (data.description as string) || '',
    ...data
  } as PostData;
}

export async function getPostData2(id: string) {
  // Simplified version for backward compatibility if needed
  // Since we don't know the locale here, we'll search for it
  let post: { data: Record<string, unknown>, content: string } | null = null;
  Object.keys(postsData).forEach(locale => {
    if (postsData[locale][id]) {
      post = postsData[locale][id];
    }
  });

  if (!post) {
    return { id, contentHtml: '' };
  }

  const { data, content } = (post as { data: Record<string, unknown>, content: string });

  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...data
  }
}
