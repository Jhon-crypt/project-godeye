import { GiDominoMask } from "react-icons/gi";
import { MdLogin } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import Link from "next/link";

export default function OffCanvasHeader() {

    return (

        <>

            <div class="offcanvas offcanvas-end text-bg-dark" id="demo" style={{ width: "270px" }}>
                <div class="offcanvas-header">
                    <h1 class="offcanvas-title">
                        <GiDominoMask className="d-inline-block align-text-center me-2" />
                        Godeye
                    </h1>
                    <button type="button" class="btn-close btn-light text-reset" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <Link href="/sign-up" class="nav-link">
                                <div class="d-grid">
                                    <button class="text-light" style={{ backgroundColor: "transparent", border: "1px solid #FFFFFF", color: "white", padding: "10px", "textAlign": "center", textDecoration: "none", display: "inline-block", margin: "4px 2px", borderRadius: "20px" }}>
                                        <MdAccountCircle class="me-2" /> Signup Now
                                    </button>
                                </div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="sign-in" class="nav-link">
                                <div class="d-grid">
                                    <button class="text-light" style={{ backgroundColor: "transparent", border: "1px solid #FFFFFF", color: "white", padding: "10px", "textAlign": "center", textDecoration: "none", display: "inline-block", margin: "4px 2px", borderRadius: "20px" }}>
                                        <MdLogin class="me-2" /> Signin Back
                                    </button>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </>

    )

}