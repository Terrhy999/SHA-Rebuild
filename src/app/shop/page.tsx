export default function ShopPage() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="/">Stately Hyland Apiaries</a>
        <nav className="site-nav" aria-label="Main navigation"><a href="/shop">Shop</a><a href="/blog">Journal</a><a href="/about">Our Apiary</a></nav>
      </header>
      <main className="content-page">
        <p className="eyebrow">From the apiary</p>
        <h1>Shop honey and gifts</h1>
        <p className="muted">The product catalogue and checkout will be connected after the new CMS foundation is in place. No live Stripe operations are configured here yet.</p>
      </main>
      <footer className="site-footer">Stately Hyland Apiaries LLC</footer>
    </>
  )
}