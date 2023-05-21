import Logo from "./logo";
import Menu from "./menu";

export default function Navbar() {
    return (
        <nav className="p-3 bg-white">
            <div className="container flex mx-auto px-20 items-center justify-between">
                <Logo width={100} height={100}/>
                <Menu/>
                <div className="flex items-center gap-2">
                    <button className="bg-orange-500 text-white p-2 px-5 rounded">Login</button>
                    <button className="bg-blue-800 text-white p-2 px-5 rounded">Register</button>
                </div>
            </div>
        </nav>
    )
}