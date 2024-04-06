import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import { GiDominoMask } from "react-icons/gi";
 
export default function Page() {
  return (
    <>
      <nav class="navbar text-white">

        <div class="container">

          <Link id="nav-text" class="navbar-brand text-white" href="/">
            <GiDominoMask className="d-inline-block align-text-center me-2" />
            Godeye
          </Link>

        </div>

      </nav>
      <div class="container mt-2 d-flex justify-content-center align-content-center">
        <SignUp />
      </div>
    </>
  )
}