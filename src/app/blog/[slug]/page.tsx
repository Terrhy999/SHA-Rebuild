import { notFound } from 'next/navigation'
import config from '@payload-config'
import { getPayload } from 'payload'

type Args = { params: Promise<{ slug: string }> }

export default async function BlogPostPage({ params }: Args) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'posts',
    where: {
      and: [
        { slug: { equals: slug } },
        { status: { equals: 'published' } },
      ],
    },
    limit: 1,
  })
  const post = result.docs[0]

  if (!post) notFound()

  return (
    <>
      <header className="site-header">
        <a className="brand" href="/">Stately Hyland Apiaries</a>
        <nav className="site-nav" aria-label="Main navigation"><a href="/shop">Shop</a><a href="/blog">Journal</a><a href="/about">Our Apiary</a></nav>
      </header>
      <main className="content-page">
        <p className="eyebrow">Notes from the apiary</p>
        <h1>{post.title}</h1>
        {post.excerpt ? <p className="muted">{post.excerpt}</p> : null}
        <p className="muted">The visual post layout renderer will be connected with the Puck editor.</p>
      </main>
      <footer className="site-footer">Stately Hyland Apiaries LLC</footer>
    </>
  )
}