import '../../styles/hero/hero.css'
import { BrowserView, MobileView } from 'react-device-detect'

export default function Hero() {

    return (

        <>

            <div class="px-4 pt-5 text-center">
                <h1 id="hero-text-heading" class="display-4 fw-bold">
                    <span id="span-text-heading">
                        View the world
                    </span>
                    <br />
                    <span class="text-white">
                        Like a god
                    </span>
                </h1>

                <div class="col-lg-6 mx-auto">
                    <p id="hero-text" class="text-lead">
                        <b>
                            With the visionary power of Ai vision, Godeye helps you view the world like never before,
                            Giving you intelligent and understandable insights about your environment and anything you
                            seem not to understand
                        </b>
                    </p>
                </div>

                <div class="col-lg-6 mx-auto">

                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button id="hero-buttonOne" type="button">Get started</button>
                        <button id="hero-buttonTwo" type="button">Try Demo</button>
                    </div>
                </div>
                <BrowserView>
                    <div>
                        <div class="container px-5">
                            <img id="hero-img" src="/hero.png" class="img-fluid" alt="Example image" width="100%" height="500" loading="lazy" />
                        </div>
                    </div>
                </BrowserView>
            </div>

        </>

    )

}