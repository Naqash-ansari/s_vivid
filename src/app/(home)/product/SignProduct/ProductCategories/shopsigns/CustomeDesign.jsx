// import ColorDrawer from "./ColorDrawer";

const CustomeDesign = ({ Signtext, getWidth, getHeight, bgColor, textColorChoice, fontFamily, textSize, selectWidth, selectHeight, getInputSignText }) => {

    const handleInputChange = (e) => {
        getInputSignText(e.target.value)
    }

    const handleWidth = (e) => {
        getWidth(e.target.value)
    }

    const handleHeight = (e) => {
        getHeight(e.target.value)
    }
    console.log('size', textSize);



    return (
        <>
            <div className="h-52 lg:h-96 md:h-52 sm:h-52 bg-black rounded-2xl p-2 flex items-center justify-center flex-col">
                <div className="flex justify-between w-full max-w-sm text-sm">
                    <div className="left-0  text-white">Width : {selectWidth}cm</div>
                    <div className="right-0 text-white">Height : {selectHeight}cm</div>
                </div>
                <div style={{ backgroundColor: bgColor, color: textColorChoice, fontFamily: fontFamily, fontSize: `${textSize}px` }}
                    className={`border rounded  p-4 flex items-center justify-center w-full max-w-sm h-16`}>
                    {Signtext == '' ? 'Customize your sign' : Signtext}
                </div>
            </div>

            <div className="mb-6 mt-3">

                <label htmlFor="success" className="block mb-2 text-gray-500 text-md font-medium">Enter shop sign text</label>
                <input
                    onChange={handleInputChange}
                    autoComplete="off"
                    type="text" id="success" className="border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Success input" />
            </div>

            <div className="flex justify-between mt-10 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex items-center">

                    <span className="mr-3">Width</span>
                    <input value={selectWidth} min={0}
                        step={1} onChange={handleWidth} type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="50" required />

                </div>

                <div className="flex items-center">

                    <span className="mr-3">Height</span>
                    <input value={selectHeight} min={0}
                        step={1} onChange={handleHeight} type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="50" required />

                </div>

            </div>

        </>
    );
}

export default CustomeDesign;
