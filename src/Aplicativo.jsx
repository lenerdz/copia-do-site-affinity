function Aplicativo(props) {
  return (
    <>
      <section className="text-center row my-12">
        <div className="col-8 offset-2">
            <h1 className="fs-5xl fonte-logo">{props.titulo}</h1>
            <p>{props.desc}</p>

        </div>
      </section>
    </>
  )
}

export default Aplicativo
