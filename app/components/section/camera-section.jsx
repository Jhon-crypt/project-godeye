import { useEffect, useRef, useState } from "react"
import { isMobile } from 'react-device-detect';


export default function GodmodeCamera() {

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

    useEffect(() => {
        getVideo();
    }, [videoRef])


    return (

        <>

            <div className="camera">
                <div>
                    <video className="rounded" ref={videoRef} style={{ width: "100%" }}></video>
                </div>

            </div>

        </>

    )

}