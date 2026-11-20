export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/">Stately Hyland Apiaries</a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="/shop">Shop</a>
          <a href="/blog">Journal</a>
          <a href="/about">Our Apiary</a>
        </nav>
      </header>
      <section className="hero">
        <p className="eyebrow">Northeastern New Jersey</p>
        <h1>Good things grow close to home.</h1>
        <p className="hero-copy">Local honey, thoughtful beekeeping, and stories from the apiary.</p>
        <div className="actions">
          <a className="button button-primary" href="/shop">Shop honey</a>
          <a className="button button-secondary" href="/blog">Read the journal</a>
        </div>
      </section>
      <footer className="site-footer">Stately Hyland Apiaries LLC</footer>
    </main>
  )
}