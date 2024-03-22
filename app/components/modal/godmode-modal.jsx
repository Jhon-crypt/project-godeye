import { GiDominoMask } from "react-icons/gi";
import GodeyeResultsCard from "../cards/godeye-results-cards";
import { FaInfoCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react"
import { isMobile, MobileView } from 'react-device-detect';


export default function GodmodeModal() {

    const videoRef = useRef(null)
    const photoRef = useRef(null)

    const [hasPhoto, setHasPhoto] = useState(false)

    const getVideo = () => {

        if (isMobile) {

            navigator.mediaDevices
                .getUserMedia({
                    video: {
                        facingMode: { exact: 'environment' }, // Use 'environment' for rear camera
                        width: 400 // Set desired width
                    }
                })
                .then(stream => {
                    let video = videoRef.current;
                    video.srcObject = stream;
                    video.play();
                })
                .catch(err => {
                    alert(err)
                })

        } else {
            navigator.mediaDevices
                .getUserMedia({
                    video: { width: 400 }
                })
                .then(stream => {
                    let video = videoRef.current;
                    video.srcObject = stream;
                    video.play();
                })
                .catch(err => {
                    alert(err)
                })
        }

    }

    const takePhoto = () => {
        // Calculate canvas size based on viewport dimensions and maximum width
        const maxWidth = 600; // Adjust this value as needed
        const isPortrait = window.innerHeight > window.innerWidth; // Check if the device is in portrait mode
        const screenWidth = isPortrait ? window.innerWidth : window.innerHeight;
        let width = Math.min(screenWidth, maxWidth);
        const height = width / (16 / 9);

        // Access video and photo elements
        const video = videoRef.current;
        const photo = photoRef.current;

        // Set canvas width and height
        photo.width = width;
        photo.height = height;

        // Draw the video frame onto the canvas
        const ctx = photo.getContext('2d');

        // Clear canvas before drawing
        ctx.clearRect(0, 0, width, height);

        // Calculate the dimensions to maintain the aspect ratio
        const aspectRatio = video.videoWidth / video.videoHeight;
        let renderWidth = width;
        let renderHeight = width / aspectRatio;

        // If the render height exceeds the canvas height, adjust the dimensions
        if (renderHeight > height) {
            renderHeight = height;
            renderWidth = height * aspectRatio;
        }

        // Calculate the position to center the image on the canvas
        const x = (width - renderWidth) / 2;
        const y = (height - renderHeight) / 2;

        // Draw the video frame with the adjusted dimensions
        ctx.drawImage(video, x, y, renderWidth, renderHeight);

        // Set state to indicate that a photo has been taken
        setHasPhoto(true);

        photoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }

    useEffect(() => {
        getVideo();
    }, [videoRef])


    return (

        <>

            <div class="modal fade" id="godmodeCard">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content bg-dark">

                        <div class="modal-header border-bottom-0">
                            <h4 class="modal-title text-primary">
                                <GiDominoMask style={{ fontSize: '25px' }} /> Godmode
                            </h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            <span class="d-flex align-content-center justify-content-center">
                                <span class="alert alert-success text-center p-2">
                                    <small><span><FaInfoCircle /></span> Point your camera to what you wanna know about</small>
                                </span>
                            </span>
                            <div className="camera">
                                <div>
                                    <video className="rounded" ref={videoRef} style={{ width: "100%" }}></video>
                                </div>

                            </div>
                            <div class="input-group mb-3 mt-3">
                                <input type="text" class="form-control" placeholder="Prompt" />
                                <button class="btn btn-primary" onClick={takePhoto}>Snap</button>
                            </div>

                            <div className="d-flex align-content-center justify-content-center">
                                <div class={(hasPhoto ? '' : 'd-none')}>
                                    <div className=" card mb-3 bg-dark shadow">
                                        {/*}
                                            <img className="rounded mb-3" src="/Bard_Generated_Image6.jpeg" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..." />
                                            {*/}
                                        <div className="card-body text-white">
                                            <div class="canvas-container mb-3" style={{ maxWidth: '100%', margin: '0 auto' }}>
                                                <canvas ref={photoRef} className="canvas" style={{ display: 'block', width: '100%', height: 'auto', borderRadius: '5px' }}></canvas>
                                            </div>
                                            <h4 class="card-title">Card title</h4>
                                            <p class="card-text">Some example text. Some example text.</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {/*}End of camera shot result{*/}
                        </div>

                        <div class="modal-footer border-top-0">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )

}