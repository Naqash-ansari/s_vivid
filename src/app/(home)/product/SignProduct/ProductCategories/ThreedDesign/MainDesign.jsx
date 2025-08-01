
'use client'
import ProductRelatedImages from '../../../../../component/ProductRelatedImages/ProductRelatedImages';
// import ProductRelatedImages from 'src/app/component/ProductRelatedImages/ProductRelatedImages';
// import { useParams } from 'next/navigation';
import CustomProdcut from './CustomProdcut'
import { useState } from 'react';


const MainDesign = () => {
    let defaultSize = '50'
    const [textColor, setTextColor] = useState('#fff');
    const [customText, setCustomText] = useState('Custome 3D Sign');
    const [bgColor, setBgColor] = useState('#000');
    const [textSize, setTextSize] = useState(defaultSize);
    const [font, setFont] = useState("roboto");


    const handleInputChange = (e) => {
        setCustomText(e.target.value)
    }

    const images = ['3D_sign.jpg', '3D_sign1.jpg', '3D_sign2.jpg', '3D_sign3.jpg'];

    const UserdecideDesign = { name: customText, bgColor: bgColor, textColor: textColor, fontFamily: font, textSize: textSize }



    return (
        <div className='my-20'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <div
                        className='text-white overflow-auto h-52 lg:h-96 md:h-52 sm:h-52 flex items-center justify-center flex-col bg-black rounded-2xl text-[2rem] font-bold'
                        style={{
                            textShadow: `
      1px 1px 1px #919191,
    1px 2px 1px #919191,
    1px 3px 1px #919191,
    1px 4px 1px #919191,
    1px 5px 1px #919191,
    1px 6px 1px #919191,
    1px 7px 1px #919191,
    1px 8px 1px #919191,
    1px 9px 1px #919191,
    1px 10px 1px #919191,
    1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2),
    1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4)
    `, color: textColor, backgroundColor: bgColor, fontFamily: font, fontSize: `${textSize}px`
                        }}
                    >
                        {customText}
                    </div>
                    {/* <div style={{ color: textColor, backgroundColor: bgColor, fontSize: textSize }} className="text_3D_Design h-52 lg:h-96 md:h-52 sm:h-52 flex items-center justify-center flex-col  bg-black rounded-2xl">{customText}</div> */}
                    <div className="mb-6 mt-3">

                        <label htmlFor="success" className="block mb-2 text-gray-500 text-md font-medium">Enter sign text</label>
                        <input
                            onChange={handleInputChange}
                            autoComplete="off"
                            type="text" id="success" className="border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Success input" />
                    </div>
                </div>
                <div>
                    <CustomProdcut customText={customText} userDecideDesign={UserdecideDesign} fontStyleText={(e) => setFont(e)} textSizeVal={textSize} textSize={(e) => setTextSize(e)} textColor={(e) => setTextColor(e)} bgColor={(val) => setBgColor(val)} />
                </div>
            </div>
            <ProductRelatedImages product_images={images} />
        </div>
    )
}

export default MainDesign