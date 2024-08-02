import { useSuggestion } from "../Context/suggestionContext";


export default function RightSide() {
    const { suggestion } = useSuggestion();

   

    return (
        <div className="w-1/2">
            <ul className="flex flex-col gap-2">
                {suggestion && suggestion.length > 0 ? (
                    suggestion.map((suggest, index) => (
                        <li
                         key={index} className="flex justify-between bg-[#202B3B] shadow-md border-2 border-[#202B3B] p-5 rounded-xl *:text-white">
                            <div className="flex gap-3 items-center">
                                <img src="/weather-icons/day/01d.svg" alt="" className="w-20 h-20" />
                                <div className="font-rubik">
                                    <h1 className="text-4xl font-semibold">{suggest.name}</h1>
                                    <p className="font-medium">10:23</p>
                                </div>
                            </div>
                            <p className="font-semibold text-4xl p-2 font-rubik">31&deg;</p>
                        </li>
                    ))
                ) : (
                    <p>No suggestions available</p>
                )}
            </ul>
        </div>
    );
}
