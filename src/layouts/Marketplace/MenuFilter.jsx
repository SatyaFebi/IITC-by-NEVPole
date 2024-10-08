import { useState, useEffect } from 'react';

const MenuFilter = ({ onFilterChange }) => {
    const [selectedOption, setSelectedOption] = useState('Semua Menu');
    const [showOptions, setShowOptions] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    const handleToggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setShowOptions(false);
        onFilterChange(option);
    };

    useEffect(() => {
        if (showOptions) {
            setAnimationClass('slide-down');
        } else {
            setAnimationClass('slide-up');
        }
    }, [showOptions]);

    return (
        <div className="rounded-md w-full h-fit py-4 px-3 mt-2 shadow-md">
            <h2 className="font-bold text-lg mb-4">Filter Menu</h2>
            <div className="flex flex-row text-sm justify-between items-center border-2 rounded-full border-black py-1 px-5 cursor-pointer" onClick={handleToggleOptions}>
                <div>{selectedOption}</div>
                <img  
                    src="./icons/Vector.svg" 
                    className={`w-2 h-3 ${showOptions ? 'rotate-90 transition-transform duration-200' : ''}`} 
                    alt="Toggle Icon"
                />
            </div>

            <div className={`mt-2 overflow-hidden transition-all duration-300 ${animationClass}`}>
                {showOptions && (
                    <ul className="w-full bg-white border border-gray-300 rounded-md">
                        <li 
                            className="p-2 hover:bg-gray-100 cursor-pointer font-medium"
                            onClick={() => handleOptionSelect('Makanan')}
                        >
                            Makanan
                        </li>
                        <li 
                            className="p-2 hover:bg-gray-100 cursor-pointer font-medium"
                            onClick={() => handleOptionSelect('Minuman')}
                        >
                            Minuman
                        </li>
                        <li 
                            className="p-2 hover:bg-gray-100 cursor-pointer font-medium"
                            onClick={() => handleOptionSelect('Semua Menu')}
                        >
                            Semua Menu
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default MenuFilter;
