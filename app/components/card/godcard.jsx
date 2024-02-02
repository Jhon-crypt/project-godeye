"use client"
import '../../styles/godcard/godcard.css'
import { GiDominoMask } from "react-icons/gi";
import GodcardModal from '../modal/godcard-modal';


export default function GodCard() {


    return (

        <>
            <div class="px-4 pt-5">
                <div class="col-lg-6 mx-auto">

                    <div id="godcard" class="card mt-5 pt-3 pb-3 mb-4">
                        <div class="card-body">
                            <h4 id="card-header" class="card-title text-center">
                                <b>
                                    <GiDominoMask style={{
                                        color: "white",
                                        fontSize: "100px"
                                    }} 
                                    />
                                </b>
                            </h4>
                            
                            <div class="d-flex align-content-center justify-content-center">
                                <button id="open-camera-btn" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#cameraModal">Open Camera</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-lg-6 mx-auto">
                    <div class="container px-5">
                        <img id="hero-img" src="/hero.png" class="img-fluid" alt="Example image" width="100%" height="500" loading="lazy" />
                    </div>
                </div>

                <GodcardModal />
            </div>

        </>

    )

}