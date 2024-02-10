import { BsArrowDownRight } from "react-icons/bs";
import Link from 'next/link'

export default function Hero() {

    return (

        <>
            <div className="container">
                <div class="pt-2 mt-3">
                    <h1 class="display-4 fw-bold text-white" style={{ fontSize: '90px'}}>
                        Get Insights On<br />What You See With Ai
                    </h1>
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
                        <h2 className="text-white"><Link href='/dashboard' className="text-decoration-none">Get started</Link></h2>
                        <h2 className="text-white"><BsArrowDownRight className="me-2"/>Learn More</h2>
                    </div>
                    
                    <div class="overflow-hidden" style={{ "maxHeight": "30vh" }}>
                        <div class="">
                            <img src="/Bard_Generated_Image6.jpeg" class="img-fluid rounded shadow-lg mb-2" alt="Example image" width="700%" height="500" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}