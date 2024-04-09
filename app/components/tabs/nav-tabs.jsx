"use client"
import GodeyeCardWrapper from "../cards/godeye-card-wrapper"
import SettingsSection from "../section/settingsSection"
import GodmodeModal from "../modal/godmode-modal"
import { useState, useEffect } from "react";

export default function NavTabs(props) {

    const [userId, setUserId] = useState(null);


    useEffect(() => {

        setUserId(props.user_id);

    }, []); // Empty dependency array to run the effect only once

    return (

        <>

            <div class="tab-content mt-5" id="tab-content">
                <div class="tab-pane active" id="fill-tabpanel-0" role="tabpanel" aria-labelledby="fill-tab-0">
                    <div class="mt-5 p-2">
                        <br /><br />
                        <GodeyeCardWrapper user_id={userId}/>
                    </div>
                </div>
                <div class="tab-pane" id="fill-tabpanel-2" role="tabpanel" aria-labelledby="fill-tab-2">
                    <div class="mt-5 p-2">
                        <br /><br />
                        <SettingsSection />
                    </div>
                </div>
            </div>

            <GodmodeModal userId={userId} />

        </>

    )

}