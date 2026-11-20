export default function AboutPage() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="/">Stately Hyland Apiaries</a>
        <nav className="site-nav" aria-label="Main navigation"><a href="/shop">Shop</a><a href="/blog">Journal</a><a href="/about">Our Apiary</a></nav>
      </header>
      <main className="content-page">
        <p className="eyebrow">Our Apiary</p>
        <h1>Rooted in our local community.</h1>
        <p className="muted">This page is a starting point. We’ll bring over the existing business story and imagery during the content migration.</p>
      </main>
      <footer className="site-footer">Stately Hyland Apiaries LLC</footer>
    </>
  )
}