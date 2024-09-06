import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

import './Footer.css'


class Footer extends React.Component {
    render() {
        return (
            <div className="pt-5 mt-auto flex justify-center">
                <div className=" mt-auto flex max-w-[40rem] w-full sm:justify-between justify-center">
                    {/* <div className="footerBorder border-y-[2px] border-opacity-20 border-slate-900 w-[90%] self-center rounded-t-full rounded-b-full"></div> */}
                    <div className="hidden sm:flex flex-col justify-center ">
                        Questions? Email&nbsp; <a href="mailto:jadams@shschools.org" className="text-highlight"> jadams@shschools.org </a>
                    </div>

                    <div className=" h-32 flex flex-col py-5 justify-center">
                        <div className=" text-neutral-800 font-bold text-center">&copy; SHP Drama 2024</div>
                        <div className="text-neutral-600 text-center text-sm">developed by theo.</div>

                    </div>
                    <div className="hidden sm:flex flex-row justify-between items-center w-32 links text-neutral-600">

                        <a href="https://www.instagram.com/shp.drama/" className="flex"><FontAwesomeIcon icon={faInstagram} className=' h-6 ' /></a>
                        <a href="https://www.tiktok.com/@shp.drama" className="flex"><FontAwesomeIcon icon={faTiktok} className=' h-6 ' /></a>
                        <a href="https://discord.gg/W8qvyghk83" className="flex"><FontAwesomeIcon icon={faDiscord} className=' h-6 ' /></a>

                    </div>
                    {/* <div className='hidden sm:block h-1 bg-slate-900 w-[90%] max-w-xl opacity-10 rounded-full self-center'></div> */}
                    <div className='hidden content flex-row h-32 justify-between pt-2 px-8 max-w-xl self-cente'>
                        {/* <div className=" w-32">
                        SHP Drama
                    </div>
                    <div className="w-32 mx-5">
                        Contact
                    </div>
                    <div className="w-32">
                        Test
                    </div> */}
                        <div className=" text-neutral-300 font-bold text-center">&copy; SHP Drama</div>
                        {/* <div className="text-neutral-400 text-center">Not affiliated with SHP.</div> */}
                        <div className="text-neutral-400 text-center">Developed by Theo.</div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Footer;