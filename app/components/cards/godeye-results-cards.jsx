import { GiDominoMask } from "react-icons/gi";

export default function GodeyeResultsCard() {

    return (

        <>

            <div className="d-flex align-content-center justify-content-center">
                <div className=" card mb-3 bg-dark shadow" style={{ width: '100%'}}>

                    <div className="card-body text-white">

                    <img className="rounded mb-3" src="/Bard_Generated_Image6.jpeg" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..." />

                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some example text. Some example text.</p>

                        {/*}
                        <div class="d-flex">
                            <div class="flex-shrink-0">
                                <GiDominoMask />
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <span className="mb-5">Godeye</span>
                                <br /><br />

                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <img className="img-fluid" src="/Bard_Generated_Image6.jpeg" width={100} height={100} alt="..."/>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <p>
                                        This is some content from a media component. You can replace this with any content and adjust it as needed.
                                        You can replace this with any content and adjust it as needed.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        */}

                    </div>

                </div>

            </div>


        </>

    )

}