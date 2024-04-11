import { GiDominoMask } from "react-icons/gi";
import { useEffect, useState } from "react";

export default function ViewGodCard(props) {

    return (

        <>

            <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id={props.id}>
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content bg-dark">

                        <div class="modal-header border-bottom-0">
                            <h4 class="modal-title text-primary">
                                <GiDominoMask style={{ fontSize: '25px' }} /> View More
                            </h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">

                            <div className=" card mb-3 bg-dark shadow" style={{ width: '100%' }}>

                                <div className="card-body text-white">

                                    <img className="rounded mb-3" src={props.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..." />
                                    <hr />
                                    <p class="lead card-text">
                                    {props.result}
                                    </p>

                                </div>

                            </div>

                
                        </div>

                    </div>
                </div>
            </div>

        </>

    )

}