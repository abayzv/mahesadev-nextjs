import Logo from "./logo";
import Menu from "./menu";
import LoginButton from "@/components/login-btn";
import Profile from "@/components/profile";

export default function Navbar({session} : {session: any}) {

    const renderLoginButton = () => {
      if(session){
        return <Profile user={session.user} />
      } else {
        return <LoginButton />
      }
    }

    return (
        <nav className="p-3 bg-white">
            <div className="container flex mx-auto px-20 items-center justify-between">
                <Logo width={100} height={100}/>
                <Menu/>
                {renderLoginButton()}
            </div>
        </nav>
    )
}