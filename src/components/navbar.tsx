
import AuthButton from "./auth-btn";
import Logo from "./logo";
import Menu from "./menu";
import LoginButton from "@/components/login-btn";
import Profile from "@/components/profile";


export default function Navbar({ session }: { session: any }) {
  return (
    <nav className="p-3 bg-white">
      <div className="container flex mx-auto lg:px-20 md:px-3 items-center justify-between">
        <div>
          <Logo width={100} height={100} />
        </div>
        <div className="hidden lg:block">
          <Menu type="standard" />
        </div>
        <div className="hidden lg:block">
          <AuthButton session={session} />
        </div>
        <div className="lg:hidden">
          <Menu type="mobile" session={session} />
        </div>
      </div>
    </nav>
  );
}
