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

    const takePhoto = () => {

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

        // Apply styling to make it look like an avatar
        photo.style.borderRadius = '50%'; // Rounded corners
        photo.style.maxWidth = '100px'; // Adjust the maximum width as needed
        photo.style.maxHeight = '100px'; // Adjust the maximum height as needed
        // Add any other styling properties as needed

        setHasPhoto(true);


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
                                <div className='d-flex align-item-center justify-content-center rounded mb-5'>
                                    <video class="rounded" ref={videoRef}></video>
                                </div>
                                <div className='card bg-black'>
                                    <div className='card-body'>
                                        <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0">
                                                    <canvas class="img-fluid rounded" height={50} width={50} ref={photoRef}></canvas>
                                                </div>
                                                <div class="flex-grow-1 ms-3 text-white">
                                                    This is some content from a media component. You can replace this with any content and adjust it as needed.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Fragment>
                        </div>


                        <div class="modal-footer">
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
                </div>
            </div>


        </>

    )

}