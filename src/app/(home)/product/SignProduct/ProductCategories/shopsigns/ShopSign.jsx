"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import img from "../../../../../assets/images/Gold.jpg";
import { useState } from "react";
import CustomeDesign from "./CustomeDesign";
import img1 from '../../../../../assets/images/log1.png';
import ProductRelatedImages from "../../../../../component/ProductRelatedImages/ProductRelatedImages";
import CustomProdcut from "../ThreedDesign/CustomProdcut";



const ShopSign = () => {
    const params = useParams();
    const [shopSignText, setShopSignText] = useState('');
    const [selectWidth, setSelectWidth] = useState('50');
    const [selectHeight, setSelectHeight] = useState('20');

    let defaultSize = '15'

    const [textColor, setTextColor] = useState('#fff');
    const [bgColor, setBgColor] = useState('#000');
    const [textSize, setTextSize] = useState(defaultSize);
    const [font, setFont] = useState("roboto");


    const UserdecideDesign = { name: shopSignText, bgColor: bgColor, textColor: textColor, fontFamily: font, textSize: textSize }

    const products = [
        {
            id: 1,
            name: 'Shops Signs',
            image: img1,
            price: '$599',
            rating: 4.5,
            text: "Make your storefront stand out with our custom Shop Signs — designed to attract customers, reflect your brand, and enhance visibility."
        },
        {
            id: 2,
            name: '3D Signs',
            image: img1,
            price: '$349',
            rating: 4.2
        },
        {
            id: 3,
            name: 'Fretcut Signs',
            image: img1,
            price: '$229',
            rating: 4.0
        },
        {
            id: 4,
            name: 'Projection Signs',
            image: img1,
            price: '$699',
            rating: 4.7
        },
        {
            id: 5,
            name: 'PVC Banner',
            image: img1,
            price: '$299',
            rating: 4.3
        },
        {
            id: 6,
            name: 'Roll-Up Banner',
            image: img1,
            price: '$199',
            rating: 4.1
        },
        {
            id: 7,
            name: 'Vinyl',
            image: img1,
            price: '$99',
            rating: 4.0
        },
        {
            id: 8,
            name: 'Backlits',
            image: img1,
            price: '$399',
            rating: 4.6
        },
        {
            id: 9,
            name: 'Flags',
            image: img1,
            price: '$149',
            rating: 4.2
        },
        {
            id: 10,
            name: 'Window Graphics',
            image: img1,
            price: '$259',
            rating: 4.3
        },
        {
            id: 11,
            name: 'Wall Graphics',
            image: img1,
            price: '$349',
            rating: 4.4
        },
        {
            id: 12,
            name: 'Vehicle Graphic',
            image: img1,
            price: '$499',
            rating: 4.7
        },
        {
            id: 13,
            name: 'Foamex Print',
            image: img1,
            price: '$129',
            rating: 4.1
        },
        {
            id: 14,
            name: 'Correx Print',
            image: img1,
            price: '$89',
            rating: 3.9
        },
        {
            id: 15,
            name: 'Taxi Magnets',
            image: img1,
            price: '$179',
            rating: 4.0
        },
        {
            id: 16,
            name: 'Exhibition Stand',
            image: img1,
            price: '$199',
            rating: 4.1
        },
    ];

    const filterData = products.filter((item) => item.id == params?.id);



    const images = ['shop_sign.jpg', 'shop_sign1.jpg', 'shop_sign2.jpg', 'shop_sign3.jpg']



    return (
        <div className="py-24 mb-14 md:py-16">
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className=" relative">

                            {
                                filterData[0]?.id == 1 ? <>
                                    <CustomeDesign getWidth={setSelectWidth} getHeight={setSelectHeight} getInputSignText={(val) => setShopSignText(val)} selectHeight={selectHeight} selectWidth={selectWidth} textSize={textSize} Signtext={shopSignText} bgColor={bgColor} textColorChoice={textColor} fontFamily={font} />

                                </> :
                                    <Image
                                        src={img}
                                        alt="Product Image"
                                        fill
                                        className="object-cover object-center rounded border border-gray-200"
                                    />
                            }
                        </div>

                        <CustomProdcut customText={shopSignText} userDecideDesign={UserdecideDesign} fontStyleText={(e) => setFont(e)} textSizeVal={textSize} textSize={(e) => setTextSize(e)} textColor={(e) => setTextColor(e)} bgColor={(val) => setBgColor(val)} />

                    </div>
                </div>

                <ProductRelatedImages product_images={images} />

            </section>

        </div>
    );
};

export default ShopSign;
