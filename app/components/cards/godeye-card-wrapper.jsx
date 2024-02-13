import GodeyeResultsCard from "./godeye-results-cards"
import '../../styles/card/godeye-card-style.css'

export default function GodeyeCardWrapper() {

    return (

        <>

            <div className="card bg-dark">

                <div id="warpper-card-body" className="card-body">

                    <h4 className="text-light p-3 text-center">Where the magic happens</h4>

                    <div id="wrapper-result-card">
                        <div className="row">
                            <div className="col-md-6">
                                <GodeyeResultsCard />
                            </div>
                            <div className="col-md-6">
                                <GodeyeResultsCard />
                            </div>
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