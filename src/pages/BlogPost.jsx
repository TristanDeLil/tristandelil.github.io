import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { posts } from '../data/posts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) return <Navigate to="/" replace />

  return (
    <main>
      <article className="post-page">
        <Link to="/#blog" className="post-back">back to all posts</Link>
        <div className="post-meta">
          <span>{post.date}</span>
          <span>·</span>
          <span className={`blog-tag ${post.tag}`}>{post.tagLabel}</span>
        </div>
        <h1 className="post-title">{post.title}</h1>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  )
}
