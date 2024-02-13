import { GiDominoMask } from "react-icons/gi";
import GodeyeResultsCard from "../cards/godeye-results-cards";
import GodmodeCamera from "../section/camera-section";

export default function GodmodeModal() {

    return (

        <>

            <div class="modal fade" id="godmodeCard">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content bg-dark">

                        <div class="modal-header border-bottom-0">
                            <h4 class="modal-title text-primary">
                                <GiDominoMask style={{ fontSize: '25px' }}/> Godmode
                            </h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            <GodmodeCamera />
                            <GodeyeResultsCard />
                        </div>

                        <div class="modal-footer border-top-0">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )

}