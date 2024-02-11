import { GiDominoMask } from "react-icons/gi";

export default function GodeyeActionButtonSection() {

    return (

        <>

            <div style={{ position: "fixed", bottom: "10px", right: "5px" }}>
                <div className="px-1 py-2 rounded bg-primary text-light text-center">
                    <span className="text-center">
                        <GiDominoMask style={{ fontSize: '25px' }}/>
                    </span>
                    <br />
                    <b>Godmode</b>
                </div>
            </div>

        </>

    )

}