

export default function CurrentWeatherCard(){
    return (
        <>
            <div className=" flex justify-between w-3/5 p-10 bg-white rounded-xl drop-shadow-xl">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-4xl font-semibold">Madrid</h1>
                        <p className="text-sm font-sans font-medium">chance of rain: 0%</p>
                    </div>
                    <div>
                        <h1 className="text-6xl font-bold font-sans">31&deg;</h1>
                    </div>
                </div>

                <div className="p-5">
                    <img src="./wheather-icons/day/01d.svg" alt="icon" />
                </div>
            </div>
        </>
    );
}