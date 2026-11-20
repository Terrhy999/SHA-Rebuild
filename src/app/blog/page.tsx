import config from '@payload-config'
import { getPayload } from 'payload'

export default async function BlogPage() {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'posts',
    where: { status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 24,
  })

  return (
    <>
      <header className="site-header">
        <a className="brand" href="/">Stately Hyland Apiaries</a>
        <nav className="site-nav" aria-label="Main navigation"><a href="/shop">Shop</a><a href="/blog">Journal</a><a href="/about">Our Apiary</a></nav>
      </header>
      <main className="content-page">
        <p className="eyebrow">Notes from the apiary</p>
        <h1>The Journal</h1>
        {result.docs.length ? (
          <div className="post-list">
            {result.docs.map((post) => (
              <article className="post-item" key={post.id}>
                <h2><a href={`/blog/${post.slug}`}>{post.title}</a></h2>
                {post.excerpt ? <p className="muted">{post.excerpt}</p> : null}
              </article>
            ))}
          </div>
        ) : <p className="muted">Published posts will appear here after content is added in the CMS.</p>}
      </main>
      <footer className="site-footer">Stately Hyland Apiaries LLC</footer>
    </>
  )
}