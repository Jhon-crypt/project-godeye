import { Fragment, useRef } from 'react';


export default function GodcardModal() {

    const cam = useRef(null);

    function capture(imgSrc) {
        console.log(imgSrc);
    }

    return (

        <>

            <div class="modal fade" id="cameraModal">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content bg-dark text-white">


                        <div class="modal-header">
                            <h4 class="modal-title">Godeye</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>


                        <div class="modal-body">
                            <Fragment>
                                <Camera

                                    front={false}
                                    capture={capture}
                                    ref={cam}
                                    width="80%"
                                    height="80%"
                                    focusWidth="80%"
                                    focusHeight="80%"
                                    btnColor="white"
                                />
                            </Fragment>
                        </div>


                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>


        </>

    )

}