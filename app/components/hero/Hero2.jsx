"use client"
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GiDominoMask } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'
import '../../styles/heropage.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Link from "next/link";

export default function Hero2() {

    return (

        <>

            <div class="text-light m-2 p-2" style={{ height: "100%" }}>

                <div class="row">
                    <div class="col-sm-4">
                        <div class="card border-0" style={{ "height": "95vh", "width": "100%", backgroundColor: "#000000" }}>
                            <img class="card-img-top" src="https://res.cloudinary.com/db7wwc9ex/image/upload/v1712021701/godeye/app/4k1_egozmb.png" alt="Card image" style={{ "height": "100%", "width": "100%", "objectFit": "cover", borderRadius: "25px" }} />
                            <div class="card-img-overlay">
                                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-5">

                                    <span class="badge rounded-pill text-dark px-3 py-2 shadow" style={{ background: "linear-gradient(120deg,rgba(255, 255, 255, .25),rgba(255, 255, 255, .75), 70%,rgba(255, 255, 255, .25) )" }}>
                                        <div class="btn-group">
                                            <button class="btn btn-md rounded-circle bg-light shadow me-2">
                                                <FaSquareXTwitter style={{ fontSize: "15px" }} />
                                            </button>
                                            <button class="btn btn-md rounded-circle bg-light shadow">
                                                <MdEmail style={{ fontSize: "15px" }} />
                                            </button>
                                        </div>

                                    </span>

                                    <div class="">
                                        <span class="badge rounded-pill text-dark px-0 me-2 py-2" style={{ background: "linear-gradient(120deg,rgba(255, 255, 255, .25),rgba(255, 255, 255, .75), 70%,rgba(255, 255, 255, .25) )" }}>
                                            <ul class="nav">
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">
                                                        <span class="rounded-circle p-1 bg-light shadow">
                                                            <GiDominoMask class="text-secondary" style={{ fontSize: "15px" }} />
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </span>

                                        <span class="badge rounded-pill text-dark px-0 py-2" style={{ background: "linear-gradient(120deg,rgba(255, 255, 255, .25),rgba(255, 255, 255, .75), 70%,rgba(255, 255, 255, .25) )" }}>
                                            <ul class="nav">
                                                <li class="nav-item">
                                                    <a class="nav-link text-white" href="#">
                                                        <span class="p-1">
                                                            Menu <FaBars class="ms-2" style={{ fontSize: "15px" }} />
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </span>
                                    </div>
                                </div>

                                <br />

                                <div class="card border-0" style={{ background: "linear-gradient(120deg,rgba(255, 255, 255, .25),rgba(255, 255, 255, .75), 70%,rgba(255, 255, 255, .25) )", boxShadow: "inset 4px 4px 5px 0 rgba(255, 255, 255, .25), inset -4px -4px 5px 0 rgba(0, 0, 0, 0.125), 0 0 10px 1px rgba(0, 0, 0, 0.25);", height: "59vh", borderRadius: "20px" }}>

                                    <div class="card-body pb-2">
                                        <h2 class="card-title display-5">Tired of typing long prompts to use Ai </h2>
                                        <p class="card-text">Godeye helps you access Ai better by hovering your camera over things and objects you want Ai answers on.</p>

                                        <div id="mcard">
                                            <div class="row row-cols-1">
                                                <div class="col">
                                                    <div class="mt-3 text-light" style={{ backgroundColor: "transparent", border: "1px solid #FFFFFF", color: "white", padding: "10px", "textAlign": "center", textDecoration: "none", display: "inline-block", margin: "4px 2px", borderRadius: "20px" }}>
                                                        <span class="me-3">
                                                            <Typewriter
                                                                loop={5}
                                                                cursor
                                                                cursorStyle='_'
                                                                typeSpeed={70}
                                                                deleteSpeed={50}
                                                                delaySpeed={1000}
                                                                words={['Education and Learning', 'Medical Diagnosis', 'Travel Assistance', 'Art Recognition', 'Identify Plant, Animals']} />
                                                        </span>
                                                        <button class="btn btn-sm rounded-circle bg-light shadow">
                                                            <FaArrowRight style={{ fontSize: "15px" }} />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="mt-3 text-light" style={{ backgroundColor: "transparent", border: "1px solid #FFFFFF", color: "white", padding: "10px", "textAlign": "center", textDecoration: "none", display: "inline-block", margin: "4px 2px", borderRadius: "20px" }}>
                                                        <span class="me-3">
                                                            <Typewriter loop={5}
                                                                cursor
                                                                cursorStyle='_'
                                                                typeSpeed={70}
                                                                deleteSpeed={50}
                                                                delaySpeed={1000}
                                                                words={['For DIY Projects', 'Analyze Environment', 'Scientific Research', 'Language Learning', 'And so much more']} />
                                                        </span>
                                                        <button class="btn btn-sm rounded-circle bg-light shadow">
                                                            <FaArrowRight style={{ fontSize: "15px" }} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/dashboard" class="mt-3 text-light" style={{ backgroundColor: "transparent", border: "1px solid #FFFFFF", color: "white", padding: "10px", "textAlign": "center", textDecoration: "none", display: "inline-block", margin: "4px 2px", borderRadius: "20px" }}>
                                    Try Out Demo
                                </Link>

                            </div>
                        </div>

                    </div>
                    <div id="col2" class="col-sm-8" style={{ "borderRadius": "25px", backgroundColor: "#000000" }}>
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center text-light">
                            <span>Become a demiGod <br />with Godeye</span>
                            <div class="mt-3 text-light" style={{ backgroundColor: "transparent", border: "1px solid #FFFFFF", color: "white", padding: "10px", "textAlign": "center", textDecoration: "none", display: "inline-block", margin: "4px 2px", borderRadius: "20px" }}>
                                Sign up now
                            </div>
                        </div>


                        <div class="container px-4 text-center text-light">
                            <div style={{ position: 'relative', width: '100%', height: '86vh', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className="mt-4">
                                    <Player
                                        autoplay
                                        loop
                                        src="/animation.json"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 5,
                                            height: '100%',
                                            width: '100%'
                                        }}
                                    >
                                        <Controls />
                                    </Player>
                                    {/* <br /><br /><br /><br /><br /><br /><br /> */}
                                </div>
                                <div style={{ position: 'relative' }}>
                                    {/* Your content goes here */}
                                    <h1 class="display-3 fw-bold"><GiDominoMask class="me-2" style={{ fontSize: "100px" }} />Godeye</h1>
                                </div>
                            </div>
                        </div>
                        <br /><br />

                        
                    </div>
                </div>

            </div>

        </>

    )

}