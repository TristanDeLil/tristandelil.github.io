import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

export default function Blog() {
  return (
    <section id="blog">
      <div className="section-label">0x03 / log</div>
      <h2>Recent <span className="italic">posts</span> & events.</h2>
      <div className="blog-list" style={{ marginTop: 40 }}>
        {posts.map(post => (
          <Link to={`/post/${post.slug}`} className="blog-item" key={post.slug}>
            <div className="blog-date">{post.date}</div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
            <span className={`blog-tag ${post.tag}`}>{post.tagLabel}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
