import '../../styles/header/header.css'
import { FaHome, FaBookmark, FaCog } from "react-icons/fa";
import { GiDominoMask } from "react-icons/gi";

export default function DashboardHeader() {

    return (

        <>

            <nav class="navbar text-white">

                <div class="container">

                    <a id="nav-text" class="navbar-brand text-white" href="#">
                        <GiDominoMask className="d-inline-block align-text-center me-2" />
                        Godeye
                    </a>
                    <span class="bg-white pt-1 px-2 rounded-circle text-dark">H</span>

                </div>

            </nav>

            <div class="container mt-4">
                <ul class="nav nav-pills nav-fill sticky-top">
                    <li class="nav-item">
                        <a class="nav-link active" id="fill-tab-0" data-bs-toggle="pill" href="#fill-tabpanel-0" role="tab" aria-controls="fill-tabpanel-0" aria-selected="true">
                            <FaHome className='me-1' /> Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="fill-tab-0" data-bs-toggle="pill" href="#fill-tabpanel-1" role="tab" aria-controls="fill-tabpanel-1" aria-selected="true">
                            <FaBookmark className='me-1' /> Library
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="fill-tab-0" data-bs-toggle="pill" href="#fill-tabpanel-2" role="tab" aria-controls="fill-tabpanel-2" aria-selected="true">
                            <FaCog className='me-1' /> Settings
                        </a>
                    </li>
                </ul>
            </div>

        </>

    )

}