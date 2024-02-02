"use client"
import '../../styles/godcard/godcard.css'
import { Fragment, useRef } from 'react';
import { Camera } from 'react-cam';


export default function GodCard() {

    const cam = useRef(null);

    function capture(imgSrc) {
        console.log(imgSrc);
    }


    return (

        <>
            <div class="px-4 pt-5 mt-5">
                <div class="col-lg-6 mx-auto">

                    <div id="godcard" class="card mt-5 pt-3 pb-3 mb-4">
                        <div class="card-body">
                            <h4 id="card-header" class="card-title text-center mb-4"><b>Godeye Demo</b></h4>
                            <p class="card-text">
                                <div class="rounded">
                                    <Camera
                                        class="rounded-top"
                                        front={false}
                                        capture={capture}
                                        ref={cam}
                                        width="80%"
                                        height="80%"
                                        focusWidth="80%"
                                        focusHeight="80%"
                                        btnColor="white"
                                    />
                                </div>
                                
                            </p>
                            <br />
                            <div class="d-flex align-content-center justify-content-center">
                                <button id="open-camera-btn" href="#" class="text-decoration-none" onClick={img => cam.current.capture(img)}>Open Camera</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-lg-6 mx-auto">
                    <div class="container px-5">
                        <img id="hero-img" src="/hero.png" class="img-fluid" alt="Example image" width="100%" height="500" loading="lazy" />
                    </div>
                </div>
            </div>

        </>

    )

}