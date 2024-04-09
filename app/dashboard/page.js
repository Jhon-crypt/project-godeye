import NavTabs from "../components/tabs/nav-tabs"
import { auth} from "@clerk/nextjs";


export default function Dashboard(){

    const { userId } = auth();
   
    return (

        <>

            <div className="container">

                <NavTabs userId={userId}/>

            </div>

        </>

    )

}