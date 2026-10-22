function Cards() {
    const dados_dos_cards = [
        {
            titulo: "Compatibilidade de arquivos",
            desc: "Importe arquivos PSD, AI, IDML, DWG e outros formatos para o Affinity com as camadas e estrutura preservadas. Seja trabalhando por conta própria ou em parceria com outras pessoas, todo mundo pode abrir, editar e dar continuidade aos mesmos arquivos sem problemas de compatibilidade.",
            foto: "https://www.affinity.studio/cdn-cgi/image/width=1600,fit=scale-down,format=auto/https://content-management-files.affinity.studio/6ae200a6-326a-442a-925b-c1603ba63639/630-330-psds-welcome1.png"
        },
        {
            titulo: "Colaboração entre equipes",
            desc: "Quer fazer mais com o seu arquivo .af finalizado? Em apenas alguns passos simples, é possível exportar seus Ativos direto para o Canva, onde você pode colaborar em tempo real com seus colegas de equipe e expandir para campanhas completas, tudo isso mantendo a identidade da marca.",
            foto: "https://www.affinity.studio/cdn-cgi/image/width=1600,fit=scale-down,format=auto/https://content-management-files.affinity.studio/b9739cfa-298f-40cb-845f-ed057d689920/630-330-cross-collaboration2.png"
        },
        {
            titulo: "Não destrutivo",
            desc: "Experimente o quanto quiser, mantendo seus arquivos originais intactos. Cada edição é adicionada à última, então você pode ajustar, reordenar ou remover qualquer etapa sem precisar unificar. O histórico de Desfazer também é salvo, então você pode voltar desde a sua exportação final até a sua primeira edição.",
            foto: "https://www.affinity.studio/cdn-cgi/image/width=1600,fit=scale-down,format=auto/https://content-management-files.affinity.studio/52fd97c7-5c41-453f-a5d1-64fd2e58e534/630-330-non-destructive1.png"
        },
        {
            titulo: "AF rápido",
            desc: "Trabalhando com milhares de camadas? Tudo bem. Quer fazer edições detalhadas com zoom de 1.000.000%? Fique à vontade. O Affinity acompanha o seu ritmo.",
            foto: "https://www.affinity.studio/cdn-cgi/image/width=1600,fit=scale-down,format=auto/https://content-management-files.affinity.studio/6ae200a6-326a-442a-925b-c1603ba63639/630-330-psds-welcome1.png"
        },
        {
            titulo: "IA opcional",
            desc: "Se você estiver em um plano Premium do Canva, poderá acessar ferramentas poderosas de IA diretamente no Affinity. Todas as ferramentas foram cuidadosamente integradas para complementar e apoiar o seu fluxo de trabalho criativo sem sobrecarregá-lo.",
            foto: "https://www.affinity.studio/cdn-cgi/image/width=1600,fit=scale-down,format=auto/https://content-management-files.affinity.studio/669338c6-6c01-4ab7-971b-4c0073c66ca6/630-330-optionalai1.png"
        },
        {
            titulo: "Card de teste",
            desc: "Descrição de teste",
            foto: "https://placehold.co/400x300"

        },
        {
            titulo: "Card de teste",
            desc: "Descrição de teste",
            foto: "https://placehold.co/400x300"
        },
        {
            titulo: "Card de teste",
            desc: "Descrição de teste",
            foto: "https://placehold.co/400x300"
        }
    ]
    dados_dos_cards.map(
        () => {}
    )
    return (
        <>
            <div id="carouselMultiple" className="carousel slide" data-bs-ends="stop" style={{
                "--bs-carousel-items": "2",
                "--bs-carousel-items-gap": "1rem",
                "--bs-carousel-items-peek": "8rem"
            }}>
                <div className="d-flex justify-content-between align-items-center container">
                    <h2 className="mb-0">Three at a time</h2>
                    <div>
                        <button className="btn-icon btn-sm rounded-circle" type="button" data-bs-target="#carouselMultiple" data-bs-slide="prev" style={{
                            "--bs-carousel-control-icon-width": "1rem"
                        }}>
                            <span className="carousel-icon-prev" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="btn-icon btn-sm ms-4 rounded-circle" type="button" data-bs-target="#carouselMultiple" data-bs-slide="next" style={{
                            "--bs-carousel-control-icon-width": "1rem"
                        }}>
                            <span className="carousel-icon-next" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="carousel-inner">

                    {
                        dados_dos_cards.map(
                            (card, index) => {
                                return (
                                    <div className="carousel-item card active">
                                        <div className="card-body">
                                            <p>{index+1}/{dados_dos_cards.length}</p>
                                            <h2 className="fw-bold">{card.titulo}</h2>
                                            <p className="card-text">{card.desc}</p>
                                        </div>
                                        <img src={card.foto} className="card-img-bottom" alt="..." />
                                    </div>
                                )
                            }
                        )
                    }

                    {/* <div className="carousel-item card active">
                        <div className="card-body">
                            <p>1/5</p>
                            <h2 className="fw-bold">Compatibilidade de arquivos</h2>
                            <p className="card-text">Importe arquivos PSD, AI, IDML, DWG e outros formatos para o Affinity com as camadas e estrutura preservadas. Seja trabalhando por conta própria ou em parceria com outras pessoas, todo mundo pode abrir, editar e dar continuidade aos mesmos arquivos sem problemas de compatibilidade.</p>
                        </div>
                        <img src="https://www.affinity.studio/cdn-cgi/image/width=1600,fit=scale-down,format=auto/https://content-management-files.affinity.studio/6ae200a6-326a-442a-925b-c1603ba63639/630-330-psds-welcome1.png" className="card-img-bottom" alt="..." />
                    </div> */}

                </div>
            </div>
        </>
    )
}
export default Cards