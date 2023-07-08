import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="pt-5 mt-auto">
                <div className=" mt-auto flex flex-col">
                    {/* <div className="footerBorder border-y-[2px] border-opacity-20 border-slate-900 w-[90%] self-center rounded-t-full rounded-b-full"></div> */}

                    <div className=" h-32 flex flex-col pt-5 pb-3 justify-center">
                        <div className=" text-neutral-800 font-bold text-center">&copy; SHP Drama 2023</div>
                        <div className="text-neutral-600 text-center">Not affiliated with SHP.</div>
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
                        <div className="text-neutral-400 text-center">Not affiliated with SHP.</div>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Footer;