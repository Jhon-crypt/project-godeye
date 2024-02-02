import { Fragment, useRef, useEffect, useState } from 'react';


export default function GodcardModal() {

    const videoRef = useRef(null)
    const photoRef = useRef(null)

    const [hasPhoto, setHasPhoto] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: { width: 300, height: 150 }
            })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getVideo()
    }, [videoRef])

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
                                <div className='d-flex align-item-center justify-content-center rounded  '>
                                    <video class="rounded" ref={videoRef}></video>
                                </div>
                                <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
                                    <canvas ref={photoRef}></canvas>
                                </div>
                            </Fragment>
                        </div>


                        <div class="modal-footer">
                            <button type="button" class="btn btn-success">Snap</button>
                            {hasPhoto ?
                                <>
                                    <button type="button" class="btn btn-warning" data-bs-dismiss="modal">End Camera</button>
                                </>
                                :
                                <></>
                            }
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>

                        </div>

                    </div>
                </div>
            </div>


        </>

    )

}