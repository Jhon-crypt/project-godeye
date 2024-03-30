import GodeyeResultsCard from "./godeye-results-cards"
import '../../styles/card/godeye-card-style.css'

export default function GodeyeCardWrapper() {

    return (

        <>

            <div className="card bg-dark">

                <div id="warpper-card-body" className="card-body">

                    {/*}
                    <h4 className="text-light p-3 text-center">Where the magic happens</h4>
                    {*/}

                    <a data-bs-toggle="modal" data-bs-target="#godmodeCard" class="mb-3 mt-3 text-light d-flex justify-content-center align-content-center" style={{ backgroundColor: "transparent", border: "1px solid #FFFFFF", color: "white", padding: "10px", "textAlign": "center", textDecoration: "none", display: "inline-block", margin: "4px 2px", borderRadius: "20px" }}>
                        Open God Eye
                    </a>

                    <div id="wrapper-result-card">
                        <div className="row">
                            <div className="col-md-6">
                                <GodeyeResultsCard />
                            </div>
                            {/*}
                            <div className="col-md-6">
                                <div className="d-flex align-content-center justify-content-center">
                                    <div className=" card mb-3 bg-dark shadow" style={{ width: '100%' }}>

                                        <div className="card-body text-white">

                                            <img className="rounded mb-3" src="/broken.jpg" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..." />

                                            <h4 class="card-title">Card title</h4>
                                            <p class="card-text">Some example text. Some example text.</p>


                                        </div>

                                    </div>

                                </div>
                            </div>
                            {*/}
                            <div className="col-md-6">
                                <GodeyeResultsCard />
                            </div>
                            <div className="col-md-6">
                                <GodeyeResultsCard />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <br />

        </>

    )

}