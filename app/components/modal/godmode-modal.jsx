import { GiDominoMask } from "react-icons/gi";
import GodeyeResultsCard from "../cards/godeye-results-cards";
import { FaInfoCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react"
import { isMobile, MobileView } from 'react-device-detect';
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#od6EFD",
};

export default function GodmodeModal() {

    const videoRef = useRef(null)
    const photoRef = useRef(null)

    const [hasPhoto, setHasPhoto] = useState(false)
    const [videoInitialized, setVideoInitialized] = useState(false);
    const [loadingGodeye, setLoadingGodeye] = useState(false)
    const [color, setColor] = useState("#ffffff");
    const [godeye_result, setGodeyeResult] = useState('')
    const [prompt, setPrompt] = useState('');



    const getVideo = () => {

        setColor("#ffffff")

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
                    setVideoInitialized(true);
                })
                .catch(err => {
                    //ALert error(Lol)
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
                    setVideoInitialized(true);
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

        setTimeout(() => {
            photoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // Adjust the delay as needed

        // Get the canvas image data
        const imageData = photoRef.current.toDataURL('image/jpeg');

        // Create a Blob from the Data URL
        const blob = dataURLtoBlob(imageData);

        // Create a FormData object
        const formData = new FormData();

        // Append the image data to the FormData object
        formData.append('image', blob);

        // Check if prompt is empty
        const promptToSend = prompt.trim() !== '' ? prompt : 'What is in this image';
        // Append the prompt value to formData
        formData.append('user_prompt', promptToSend);

        // Make sure to replace 'YOUR_BEARER_TOKEN' with your actual bearer token
        const bearerToken = process.env.NEXT_PUBLIC_GODEYE_BEARER;

        //console.log(bearerToken)

        // Once the response starts, set loading state to true
        setLoadingGodeye(true)
        // Make an HTTP POST request to your API endpoint
        fetch('/api/godeye', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        })
            .then(response => {
                // Once the response is received, set loading state to false
                setLoadingGodeye(false)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('API Response:', data.result.gemini_pro_vision_response);
                setGodeyeResult(data.result.gemini_pro_vision_response)
                // Handle API response if needed
            })
            .catch(error => {
                // If an error occurs, set loading state to false
                setLoadingGodeye(false)
                console.error('Error:', error);
                // Handle error if needed
            });

        // Convert Data URL to Blob
        function dataURLtoBlob(dataURL) {
            const parts = dataURL.split(';base64,');
            const contentType = parts[0].split(':')[1];
            const raw = window.atob(parts[1]);
            const rawLength = raw.length;
            const uInt8Array = new Uint8Array(rawLength);
            for (let i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }
            return new Blob([uInt8Array], { type: contentType });
        }

    }

    const closeCamera = () => {
        if (videoInitialized) {
            const stream = videoRef.current.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
        }
    }

    useEffect(() => {
        // Attach event listener for modal shown event

        const onModalShown = () => {
            // When the modal is shown, call getVideo to initialize the camera
            getVideo();
        };

        // Get the modal element
        const modalElement = document.getElementById('godmodeCard');
        if (modalElement) {
            // Add event listener for shown.bs.modal event
            modalElement.addEventListener('shown.bs.modal', onModalShown);
        }

        // Cleanup function to remove event listener when the component unmounts
        return () => {
            if (modalElement) {
                modalElement.removeEventListener('shown.bs.modal', onModalShown);
            }
        };

    }, [])


    return (

        <>

            <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="godmodeCard">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content bg-dark">

                        <div class="modal-header border-bottom-0">
                            <h4 class="modal-title text-primary">
                                <GiDominoMask style={{ fontSize: '25px' }} /> Godmode
                            </h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={closeCamera}></button>
                        </div>

                        <div class="modal-body">
                            {/*}
                            <span class="d-flex align-content-center justify-content-center">
                                <span class="alert alert-success text-center p-2">
                                    <small><span><FaInfoCircle /></span> Point your camera to what you wanna know about</small>
                                </span>
                            </span>
                            {*/}
                            <div className="camera">
                                <div>
                                    <video className="rounded" ref={videoRef} style={{ width: "100%" }}></video>
                                </div>

                            </div>
                            <div class="input-group mb-3 mt-3">
                                <input id="prompt" type="text" class="form-control" placeholder="Prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
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
                                            {loadingGodeye ?

                                                <>
                                                    <ClipLoader
                                                        color={color}
                                                        loading={loadingGodeye}
                                                        cssOverride={override}
                                                        size={50}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                    />
                                                </>
                                                :
                                                <>
                                                    {/*}<h4 class="card-title"></h4>{*/}
                                                    <div class="card-text">
                                                        <div class="alert alert-dark">
                                                            {godeye_result}
                                                        </div>
                                                    </div>
                                                </>
                                            }

                                        </div>

                                    </div>
                                </div>

                            </div>
                            {/*}End of camera shot result{*/}
                        </div>

                        <div class="modal-footer border-top-0">
                            <button type="button" onClick={closeCamera} class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )

}