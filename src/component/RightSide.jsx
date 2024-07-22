export default function RightSide(){
    return(
        <div className="w-1/2" >
            <ul className="flex flex-col gap-2">
                <li className="flex justify-between bg-[#29abe300] shadow-md border-2 border-[#0461a5] p-5 rounded-xl *:text-white ">
                    <div className="flex  gap-3 items-center">
                        <img src="/wheather-icons/day/01d.svg" alt="" className="w-20 h-20" />
                        <div className="font-rubik ">
                            <h1 className="text-4xl font-semibold ">Madrid</h1>
                            <p className="font-medium">10:23</p>
                        </div>
                    </div>
                    <p className="font-semibold text-4xl p-2 font-rubik">31&deg;</p>
                </li>
                <li className="flex justify-between bg-[#202B3B] shadow- bmdorder-2 p-5 rounded-xl  *:text-white">
                    <div className="flex  gap-3 items-center">
                        <img src="/wheather-icons/day/01d.svg" alt="" className="w-20 h-20" />
                        <div className="font-rubik ">
                            <h1 className="text-4xl font-semibold ">Madrid</h1>
                            <p className="font-medium">10:23</p>
                        </div>
                    </div>
                    <p className="font-semibold text-4xl p-2 font-rubik">31&deg;</p>
                </li>
                <li className="flex justify-between bg-[#202B3B] shadow- bmdorder-2 p-5 rounded-xl *:text-white">
                    <div className="flex  gap-3 items-center">
                        <img src="/wheather-icons/day/01d.svg" alt="" className="w-20 h-20" />
                        <div className="font-rubik ">
                            <h1 className="text-4xl font-semibold text-white">Madrid</h1>
                            <p className="font-medium">10:23</p>
                        </div>
                    </div>
                    <p className="font-semibold text-4xl p-2 font-rubik">31&deg;</p>
                </li>
            </ul>
        </div>
    )
}