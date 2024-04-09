import '../../styles/card/godeye-card-style.css'

export default function GodeyeCardWrapper(props) {
    console.log(props.user_id)
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
                            {/*}
                            <div className="col-md-6">
                                <GodeyeResultsCard />
                            </div>
                        {*/}
                            <div className="col-md-6">
                                <div className="d-flex align-content-center justify-content-center">
                                    <div className=" card mb-3 bg-dark shadow" style={{ width: '100%' }}>

                                        <div className="card-body text-white">

                                            <img className="rounded mb-3" src="/math.png" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..." />

                                            <h4 class="card-title">What's the asnwer to this</h4>
                                            <p class="card-text">
                                                The answer to the question in the image is B
                                                2x+5
                                                x
                                                2
                                                +5x+6
                                            </p>

                                            <div class="d-grid">
                                                <button type="button" class="mb-3 mt-3 text-light d-flex justify-content-center align-content-center" style={{ backgroundColor: "transparent", border: "1px solid #FFFFFF", color: "white", padding: "10px", "textAlign": "center", textDecoration: "none", display: "inline-block", borderRadius: "20px" }}>view more</button>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex align-content-center justify-content-center">
                                    <div className=" card mb-3 bg-dark shadow" style={{ width: '100%' }}>

                                        <div className="card-body text-white">

                                            <img className="rounded mb-3" src="/flat.jpg" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..." />

                                            <h4 class="card-title">How can i fix my flat tire</h4>
                                            <p class="card-text">Here are steps to patch a tire with a tire plug kit below...</p>

                                            <div class="d-grid">
                                                <button type="button" class="mb-3 mt-3 text-light d-flex justify-content-center align-content-center" style={{ backgroundColor: "transparent", border: "1px solid #FFFFFF", color: "white", padding: "10px", "textAlign": "center", textDecoration: "none", display: "inline-block", borderRadius: "20px" }}>view more</button>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/*}
                            <div className="col-md-6">
                                <GodeyeResultsCard />
                            </div>
                            <div className="col-md-6">
                                <GodeyeResultsCard />
                            </div>
                            {*/}
                        </div>

                    </div>

                </div>

            </div>
            <br />

        </>

    )

}