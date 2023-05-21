import Logo from "./logo";

export default function Footer() {
    return (
        <footer className="bg-white pt-16 w-full text-neutral-700">
            <div className="container mx-auto px-20">
                <div className="grid gap-10 grid-cols-4">
                    {/* Information */}
                    <div className="grid gap-5">
                        <Logo width={150} height={150}/>
                        <p>Molestie ad feugiat est facilisi faucibus magnis. Convallis magna pellentesque odio fusce turpis elit.</p>
                        <div>
                            <button className="bg-orange-500 text-white p-2 px-5 rounded">Contact US</button>
                        </div>
                    </div>

                    {/* Footer Menu 1 */}
                    <div>
                        <div className="text-xl font-bold">Company</div>
                        <ul className="mt-3 grid gap-2">
                            <li>About</li>
                            <li>Team</li>
                            <li>History</li>
                            <li>Work</li>
                        </ul>
                    </div>

                    {/* Footer Menu 2 */}
                    <div>
                        <div className="text-xl font-bold">Services</div>
                        <ul className="mt-3 grid gap-2">
                            <li>Marketing</li>
                            <li>Consulting</li>
                            <li>Development</li>
                            <li>Design</li>
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div>
                        <div className="text-xl font-bold">Contacts</div>
                        <div className="mt-3 grid gap-2">
                            <div>Jl Cempaka Wangi No 22 Jakarta - Indonesia</div>
                            <div>support@yourmail.tld</div>
                            <div>+6221.2002.2012</div>
                        </div>
                        <div className="mt-5 flex gap-3 items-center">
                            <div>Follow Us:</div> 
                            <div className="flex gap-2">
                                <div className="inline-block w-5 h-5 rounded-full bg-yellow-500"></div>
                                <div className="inline-block w-5 h-5 rounded-full bg-yellow-500"></div>
                                <div className="inline-block w-5 h-5 rounded-full bg-yellow-500"></div>
                                <div className="inline-block w-5 h-5 rounded-full bg-yellow-500"></div>
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