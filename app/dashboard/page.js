"use client"

import NavTabs from "../components/tabs/nav-tabs"
import GodeyeActionButtonSection from "../components/section/godeye-action-btn-section"
import GodmodeModal from "../components/modal/godmode-modal"

export default function Dashboard(){

    return (

        <>

            <div className="container">

                <NavTabs />

                <GodeyeActionButtonSection />

            </div>

            <GodmodeModal />

        </>

    )

}