function Hero() {
  return (
    <>
      <section className="text-center d-flex flex-column align-items-center justify-content-center min-vh-100">
        <h1 className="fs-6xl">Crie <em className="fonte-logo">livremente</em></h1>
        <p>Design profissional, edição de fotos e layout de páginas no mesmo app.</p>
        <div>
            <button type="button" className="btn-solid theme-success me-5">Grátis para pessoa física</button>
            <button type="button" className="btn-solid theme-secondary">Adquirir para empresas</button>
        </div>
        <p className="mt-5">By <span className="assinatura fs-3xl">Canva</span></p>
      </section>
    </>
  )
}

export default Hero