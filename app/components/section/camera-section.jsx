import { useEffect, useRef, useState } from "react"
import { isMobile, MobileView } from 'react-device-detect';


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

    const takePhoto = () => {
        const width = 414;
        const height = width / (16 / 9);

        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width= width;
        photo.height = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);

        setHasPhoto(true)

    }

    useEffect(() => {
        getVideo();
    }, [videoRef])

    return (

        <>

            <div className="camera">
                <div>
                    <MobileView>
                        <video className="rounded" ref={videoRef} style={{ width: "100%" }}></video>
                    </MobileView>
                </div>

            </div>

        </>

    )

}