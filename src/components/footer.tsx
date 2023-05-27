import Icon from "./icon";
import Logo from "./logo";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white pt-16 w-full text-neutral-700">
            <div className="container mx-auto lg:px-20 px-5">
                <div className="flex gap-10 flex-row flex-wrap">
                    {/* Information */}
                    <div className="grid gap-5 lg:w-1/4 flex-auto">
                        <Logo width={150} height={150}/>
                        <p>Molestie ad feugiat est facilisi faucibus magnis. Convallis magna pellentesque odio fusce turpis elit.</p>
                        <div className="flex gap-2">
                            <Image src="/assets/images/app-store-button.png" alt="Download from Appstore" title="Download from Appstore" width={100} height={40} className="w-[100px] h-[40px]" />
                            <Image src="/assets/images/playstore-button.png" alt="Download from Playstore" title="Download from Playstore" width={100} height={40}  className="w-[100px] h-[40px]" />
                        </div>
                    </div>

                    {/* Footer Menu 1 */}
                    <div className="lg:w-1/5 w-1/2 flex-1">
                        <div className="text-xl font-bold">Company</div>
                        <ul className="mt-3 grid gap-2">
                            <li>About</li>
                            <li>Team</li>
                            <li>History</li>
                            <li>Work</li>
                        </ul>
                    </div>

                    {/* Footer Menu 2 */}
                    <div className="lg:w-1/5 w-1/2 flex-1">
                        <div className="text-xl font-bold">Services</div>
                        <ul className="mt-3 grid gap-2">
                            <li>Marketing</li>
                            <li>Consulting</li>
                            <li>Development</li>
                            <li>Design</li>
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div className="lg:w-1/4">
                        <div className="text-xl font-bold">Contacts</div>
                        <div className="mt-3 grid gap-2">
                            <div className="flex gap-3"><Icon name="location" color="grey" size="15" /> Jalan Perintis Kemerdekaan No. 1 Bandung 40117</div>
                            <div className="flex gap-3"><Icon name="mail" color="grey" size="15" /> dokumen@kai.id</div>
                            <div className="flex gap-3"><Icon name="phone" color="grey" size="15" /> 022-4230031, 4230039, 4230054</div>
                        </div>
                        <div className="mt-10 flex lg:flex-row flex-col gap-3 items-center">
                            <div>Follow Us:</div> 
                            <div className="flex gap-2">
                                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-500">
                                    <Icon name="facebook" color="white" size="18"/>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-500">
                                    <Icon name="twitter" color="white" size="18"/>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-500">
                                    <Icon name="instagram" color="white" size="18"/>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-500">
                                    <Icon name="youtube" color="white" size="18"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-t border-[#00000040] lg:mt-16 mt-5 lg:text-start text-center lg:text-base text-xs">
                    Copyright © 2023 Mahesadev, All rights reserved.
                </div>
            </div>
        </footer>
    )
}