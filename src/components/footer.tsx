import Icon from "./icon";
import Logo from "./logo";

export default function Footer() {
    return (
        <footer className="bg-white pt-16 w-full text-neutral-700">
            <div className="container mx-auto px-20">
                <div className="flex gap-10">
                    {/* Information */}
                    <div className="grid gap-5 w-1/4">
                        <Logo width={150} height={150}/>
                        <p>Molestie ad feugiat est facilisi faucibus magnis. Convallis magna pellentesque odio fusce turpis elit.</p>
                        <div>
                            <button className="bg-orange-500 text-white p-2 px-5 rounded">Contact US</button>
                        </div>
                    </div>

                    {/* Footer Menu 1 */}
                    <div className="w-1/5">
                        <div className="text-xl font-bold">Company</div>
                        <ul className="mt-3 grid gap-2">
                            <li>About</li>
                            <li>Team</li>
                            <li>History</li>
                            <li>Work</li>
                        </ul>
                    </div>

                    {/* Footer Menu 2 */}
                    <div className="w-1/5">
                        <div className="text-xl font-bold">Services</div>
                        <ul className="mt-3 grid gap-2">
                            <li>Marketing</li>
                            <li>Consulting</li>
                            <li>Development</li>
                            <li>Design</li>
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div className="w-1/4">
                        <div className="text-xl font-bold">Contacts</div>
                        <div className="mt-3 grid gap-2">
                            <div>Jl Cempaka Wangi No 22 Jakarta - Indonesia</div>
                            <div>support@yourmail.tld</div>
                            <div>+6221.2002.2012</div>
                        </div>
                        <div className="mt-10 flex gap-3 items-center">
                            <div>Follow Us:</div> 
                            <div className="flex gap-2">
                                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-500">
                                    <Icon name="facebook" color="white" size="20"/>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-500">
                                    <Icon name="twitter" color="white" size="20"/>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-500">
                                    <Icon name="instagram" color="white" size="20"/>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-500">
                                    <Icon name="youtube" color="white" size="20"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-t border-[#00000040] mt-16">
                    Copyright © 2023 Mahesadev, All rights reserved.
                </div>
            </div>
        </footer>
    )
}