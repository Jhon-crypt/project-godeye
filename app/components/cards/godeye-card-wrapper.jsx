"use client"
import '../../styles/card/godeye-card-style.css'
import { useEffect, useState } from 'react'
import supabase from '../supabase/supabase';
import { useAuth } from "@clerk/nextjs";
import '../../styles/loader.css'
import ViewGodCard from '../modal/viewGodCard';

export default function GodeyeCardWrapper() {

    const { userId } = useAuth();

    // Initialize state variables for portfolios and loading state
    const [godCards, setGodCards] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        console.log('joh')
        console.log("This is me")

        setLoading(true)

        async function fetchGodSanHistory() {
            try {
                setLoading(true)
                const { data } = await supabase
                    .from('godScan_history')
                    .select('*')
                    .eq('user_id', `${userId}`)
                    .order('id', { ascending: false })

                if (data) {
                    setLoading(false)
                    setGodCards(data)
                    console.log(data)

                } else {
                    setLoading(false)
                    console.log("Nothing here")
                }
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }
        fetchGodSanHistory()

        const godListener = supabase
        .channel('any')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'godScan_history' }, payload => {
            const newGod = payload.new;
            setGodCards((oldGod) => {
                // Add the newly inserted project to the list of projects and sort them by ID.
                const newGods = [...oldGod, newGod];
                newGods.sort((a, b) => b.id - a.id);
                return newGods;
            });
        })
        .subscribe();

    return () => {
        supabase.removeChannel(godListener); // Cleanup: remove the listener when the component is unmounted.
    };

    }, []);

    return (

        <>

            <div className="card bg-dark">

                <div id="warpper-card-body" className="card-body">

                    {/*}
                    <h4 className="text-light p-3 text-center">Where the magic happens</h4>
                    {*/}

                    <a data-bs-toggle="modal" data-bs-target="#godmodeCard" class="mb-3 mt-3 text-light d-flex justify-content-center align-content-center" style={{ backgroundColor: "transparent", border: "1px solid #FFFFFF", color: "white", padding: "10px", "textAlign": "center", textDecoration: "none", display: "inline-block", margin: "4px 2px", borderRadius: "20px" }}>
                        Open God Eye
                    </a>

                    {loading ?
                        <>
                            <div class="d-flex align-content-center justify-content-center">
                                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                            </div>
                        </>
                        :
                        <>
                            <div id="wrapper-result-card">
                                <div className="row">

                                    {godCards.map((god) => (
                                        <>
                                            <div className="col-md-6" key={god.id}>
                                                <div className="d-flex align-content-center justify-content-center">
                                                    <div className=" card mb-3 bg-dark shadow" style={{ width: '100%' }}>

                                                        <div className="card-body text-white">

                                                            <img className="rounded mb-3" src={god.godScan_image_link} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..." />

                                                            <p id="test" class="lead card-text">
                                                                {god.godScan_response}
                                                            </p>

                                                            <div class="d-grid">
                                                                <button data-bs-toggle="modal" data-bs-target={`#viewGodCard-${god.id}`} type="button" class="mb-3 mt-3 text-light d-flex justify-content-center align-content-center" style={{ backgroundColor: "transparent", border: "1px solid #FFFFFF", color: "white", padding: "10px", "textAlign": "center", textDecoration: "none", display: "inline-block", borderRadius: "20px" }}>view more</button>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>
                                                <ViewGodCard id={`viewGodCard-${god.id}`} image={god.godScan_image_link} result={god.godScan_response}/>
                                            </div>

                                        </>
                                    ))}
                                    {/*}
                            <div className="col-md-6">
                                <GodeyeResultsCard />
                            </div>
                            <div className="col-md-6">
                                <GodeyeResultsCard />
                            </div>
                            {*/}
                                </div >

                            </div>
                        </>
                    }

                </div>

            </div>
            <br />

        </>

    )

}