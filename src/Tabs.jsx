import img1 from './assets/studio-ia.svg'
import img2 from './assets/studio-layout.svg'
import img3 from './assets/studio-pixel.svg'
import img4 from './assets/studio-vetor.svg'

function Tabs() {
    return (
        <>
            <section className="text-center">
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                        <img src={img1} alt="" />
                    </div>
                    <div className="tab-pane" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                        <img src={img2} alt="" />
                    </div>
                    <div className="tab-pane" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                        <img src={img3} alt="" />
                    </div>
                    <div className="tab-pane" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">
                        <img src={img4} alt="" />
                    </div>
                </div>
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="tab" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                            Home</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="tab" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                            Profile</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="tab" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="tab" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" >Disabled</button>
                    </li>
                </ul>
                
            </section>
        </>
    )
}

export default Tabs
