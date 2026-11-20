export default function BlogPage() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="/">Stately Hyland Apiaries</a>
        <nav className="site-nav" aria-label="Main navigation"><a href="/shop">Shop</a><a href="/blog">Journal</a><a href="/about">Our Apiary</a></nav>
      </header>
      <main className="content-page">
        <p className="eyebrow">Notes from the apiary</p>
        <h1>The Journal</h1>
        <p className="muted">Blog posts will appear here after the Payload collections and visual editor are connected.</p>
      </main>
      <footer className="site-footer">Stately Hyland Apiaries LLC</footer>
    </>
  )
}