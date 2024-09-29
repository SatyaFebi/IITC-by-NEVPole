

const MarketNameShort = () => {
    return (
        <div className="flex flex-col rounded-md w-full transition-all h-fit py-4 px-3 shadow-md">
            <div className="flex flex-row">
                <div className="w-14 h-14 rounded-md bg-slate-200 shadow-md"></div>
                <div className="flex flex-col ml-3 justify-start">
                    <h2 className="font-bold text-md">
                        Warkop Babeh, SMKN 1 Cibinong
                    </h2>
                    <div className="flex flex-row mt-2 items-center">
                        <div className="bg-green-400 rounded-md px-2 py-1 text-white text-xs flex flex-row">
                            4.9
                        </div>
                        <div className="w-px h-6 bg-black mx-2"></div>
                        <div className="bg-secondary rounded-full px-3 py-1 text-white text-xs flex flex-row">
                            Meja 6
                        </div>
                        <div className="w-px h-6 bg-black mx-2"></div>
                        <p className="text-xs font-bold text-black">
                            Cibinong, Indonesia
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketNameShort;
