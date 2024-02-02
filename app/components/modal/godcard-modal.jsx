import { Fragment, useRef, useEffect, useState } from 'react';
import { GiDominoMask } from "react-icons/gi";


export default function GodcardModal() {

    const videoRef = useRef(null)
    const photoRef = useRef(null)

    const [onSnap, setOnSnap] = useState(false)
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

    const takePhoto = () => {

        setOnSnap(true)

        const width = 100; // Set the desired width for the avatar
        const height = width / (16 / 9); // Calculate height to maintain the aspect ratio

        let video = videoRef.current;
        let photo = photoRef.current;

        // Set the canvas size
        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext('2d');
        // Draw the video frame on the canvas with the new dimensions
        ctx.drawImage(video, 0, 0, width, height);

        // Apply Bootstrap classes for responsiveness
        photo.classList.add('img-fluid', 'rounded', 'mx-auto', 'd-block');

        setHasPhoto(true);

    }

    return (

        <>

            <div class="modal fade" id="cameraModal">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content text-white" style={{ background: "rgba(39, 39, 39, 0.1)", backdropFilter: "blur(60px)", "-webkit-backdrop-filter": "blur(60px)", borderRadius: "30px;" }}>


                        <div class="border-bottom-0">
                            <div className='d-flex align-content-center justify-content-center'>
                                <GiDominoMask style={{
                                    color: "white",
                                    fontSize: "50px"
                                }}>
                                </GiDominoMask>
                            </div>
                        </div>


                        <div class="modal-body">
                            
                                <div className='d-flex align-item-center justify-content-center rounded mb-5'>
                                    <video class="rounded" ref={videoRef}></video>
                                </div>

                                {onSnap  ?
                                    <>
                                        <div>
                                            <div className='card bg-dark'>
                                                <div className='card-body'>

                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <canvas class="img-fluid rounded" ref={photoRef}></canvas>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3 text-white">
                                                            This is some content from a media component. You can replace this with any content and adjust it as needed.
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <></>
                                }

                            
                        </div>


                        <div class="modal-footer d-flex align-content-center justify-content-center border-top-0">
                            <button type="button" class="btn btn-success" onClick={takePhoto}>Snap</button>
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
                </div >
            </div >


        </>

    )

}