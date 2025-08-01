import { useState, useEffect, useRef } from "react";
import ColorPicker from "react-pick-color";

const TextColorDrawer = ({ getTextcolor }) => {
    const [isOpen, setIsOpen] = useState(false);
    const drawerRef = useRef(null);

    // const [color, setColor] = useState('#fff');


    const handleColorChange = (newColor) => {
        // setColor(newColor.hex);
        getTextcolor(newColor.hex); // Lift state to parent

    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && drawerRef.current && !drawerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            {/* Drawer Toggle Button */}
            <div className="text-center">
                <button
                    onClick={() => setIsOpen(true)}
                    className="border-2 cursor-pointer border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"
                ></button>
            </div>

            {/* Drawer (Right side) */}
            <div
                ref={drawerRef}
                className={`fixed top-26 md:top-24 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-black w-80 dark:bg-gray-800 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                aria-labelledby="drawer-label"
            >
                {/* Close button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 justify-between absolute top-2.5 left-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>

                <ColorPicker onChange={handleColorChange} className="mt-12" />
            </div>
        </>
    );
};

export default TextColorDrawer;
