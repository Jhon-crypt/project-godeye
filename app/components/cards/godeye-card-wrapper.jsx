import GodeyeResultsCard from "./godeye-results-cards"

export default function GodeyeCardWrapper() {

    return (

        <>

            <div className="card bg-dark">

                <div className="card-body" style={{ maxHeight: "200px;" }}>

                    <h4 className="text-light p-3">Where the magic happens</h4>

                    <GodeyeResultsCard />
                    <GodeyeResultsCard />
                    <GodeyeResultsCard />

                </div>

            </div>
            <br />

        </>

    )

}