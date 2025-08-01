'use client'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import TextColorDrawer from '../../../../../component/TextColorDrawer/TextColorDrawer';
import BgColorDrawer from '../../../../../component/BgColorDrawer/BgColorDrawer';
import EmailModal from '../../../../../component/EmailModal/EmailModal'
import { products } from '../../../../../api/products/list'
import { fontList } from '../../../../../api/fonts/FontFamily'


const CustomProdcut = ({ textColor, bgColor, textSize, textSizeVal, fontStyleText, userDecideDesign, customText }) => {


    const params = useParams();
    const [filterProduct, setFilterProduct] = useState([]);

    const filterData = products.filter((item) => item.id == params?.id);

    useEffect(() => {
        setFilterProduct(filterData[0])
    }, [])

    const handleFontChange = (e) => {
        fontStyleText(e.target.value);
    };
    const handleTextSizeChange = (e) => {
        textSize(e.target.value);
    }


    return (
        <div className="">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{filterProduct.name}</h1>
            <div className="flex mb-4">
                <span className="flex items-center text-amber-500">★★★★★</span>
                <span className="text-gray-600 ml-3">{filterProduct.rating} Reviews</span>
            </div>
            <p className="leading-relaxed">
                {filterProduct.text}
            </p>
            <div className="flex justify-between mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                    <span className="mr-3">Text Color</span>
                    <TextColorDrawer getTextcolor={(e) => textColor(e)} />
                </div>

                <div className="flex ml-6 items-center">
                    <span className="mr-3">Style</span>

                    <select
                        onChange={handleFontChange}
                        className="border border-gray-300 p-2 rounded"
                    >
                        <option value="">Select Font</option>
                        {fontList.map((font, index) => (
                            <option key={index} value={font.value}>
                                {font.label}
                            </option>
                        ))}
                    </select>


                </div>
            </div>

            <div className="flex justify-between mt-10 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                    <span className="mr-3">Background Color</span>
                    <BgColorDrawer colorGet={(e) => bgColor(e)} />
                </div>

                <div className="flex ml-6 items-center">
                    <div className="flex items-center">

                        <span className="mr-3">Size</span>
                        <input value={textSizeVal} min={0}
                            step={1} onChange={handleTextSizeChange} type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="50" required />

                    </div>

                </div>

            </div>

            <div className="flex w-full items-center justify-between">
                {/* <span className="title-font font-medium text-2xl text-gray-900">{filterProduct.price}</span> */}
                {/* {shopSignText && <UserModal finalShopDesign={UserdecideDesign} />} */}
                {customText && <EmailModal finalShopDesign={userDecideDesign} />}

            </div>
        </div>
    )
}

export default CustomProdcut