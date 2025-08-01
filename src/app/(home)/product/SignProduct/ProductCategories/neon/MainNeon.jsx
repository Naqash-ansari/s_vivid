'use client';

import React, { useState } from 'react';
import NeonOnDemand from './NeonOnDemand';

const sizes = [
    { width: '40cm | 16INCH', height: '30cm | 12INCH', note: 'Maximum 40cm (1.30ft) width and 30cm (1ft) height' },
    { width: '50cm | 20INCH', height: '38cm | 15INCH', note: 'Maximum 50cm width and 38cm height' },
    { width: '65cm | 26INCH', height: '50cm | 20INCH', note: 'Maximum 65cm width and 50cm height' },
    { width: '75cm | 30INCH', height: '55cm | 22INCH', note: 'Maximum 75cm width and 55cm height' },
    { width: '90cm | 36INCH', height: '65cm | 26INCH', note: 'Maximum 90cm width and 65cm height' },
    { width: '100cm | 40INCH', height: '70cm | 28INCH', note: 'Maximum 100cm width and 70cm height' },
    { width: '120cm | 47INCH', height: '85cm | 33INCH', note: 'Maximum 120cm width and 85cm height' },
    { width: '150cm | 59INCH', height: '105cm | 41INCH', note: 'Maximum 150cm width and 105cm height' },
    { width: '200cm | 78INCH', height: '140cm | 55INCH', note: 'Maximum 200cm width and 140cm height - the sign will come in 2 separate acrylic boards' },
];

const colors = [
    { name: 'Green', hex: '#22c55e' },
    { name: 'White', hex: '#ffffff' },
    { name: 'Yellow', hex: '#eab308' },
    { name: 'Blue', hex: '#60a5fa' },
    { name: 'Red', hex: '#ef4444' },
];

const fonts = [
    { name: 'Monoton', css: 'Monoton, cursive' },
    { name: 'Pacifico', css: 'Pacifico, cursive' },
    { name: 'Orbitron', css: 'Orbitron, sans-serif' },
    { name: 'Sans-serif', css: 'sans-serif' },
];

const backgroundImages = [
    '/bg1.jpg',
    '/bg2.jpg',
    '/bg3.jpg',
    '/bg4.jpg',
    '/bg5.jpg',
];

const getLimitsForSize = (sizeLabel) => {
    switch (sizeLabel) {
        case '40cm | 16INCH':
            return { maxLines: 1, maxCharsPerLine: 7 };
        case '50cm | 20INCH':
            return { maxLines: 2, maxCharsPerLine: 15 };
        case '65cm | 26INCH':
            return { maxLines: 2, maxCharsPerLine: 25 };
        case '75cm | 30INCH':
            return { maxLines: 3, maxCharsPerLine: 50 };
        default:
            return { maxLines: 2, maxCharsPerLine: 75 };
    }
};

const MainNeon = () => {
    const [userText, setUserText] = useState('');
    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const [selectedColor, setSelectedColor] = useState(colors[1]);
    const [selectedBg, setSelectedBg] = useState('/bg5.jpg');
    const [uploadedImage, setUploadedImage] = useState(null);
    const [selectedFont, setSelectedFont] = useState(fonts[0]);

    const { maxLines, maxCharsPerLine } = getLimitsForSize(selectedSize.width);

    const handleTextChange = (e) => {
        let input = e.target.value;
        let lines = input.split('\n');

        if (lines.length > maxLines) lines = lines.slice(0, maxLines);
        lines = lines.map(line => line.slice(0, maxCharsPerLine));
        setUserText(lines.join('\n'));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
                setSelectedBg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='py-20 pb-30'>
            <div className="min-h-screen bg-black rounded-2xl flex items-center justify-center px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
                    {/* Left Column */}
                    <div className="space-y-6 text-white">
                        <h2 className="text-xl font-bold text-amber-500">
                            MAKE YOUR NEON SIGN - FULLY CUSTOMIZE
                        </h2>

                        <div className="text-sm text-amber-500 font-semibold mb-1">Write your text</div>
                        <p className="text-sm text-gray-300 mb-2">
                            {Math.min(userText.split('\n').length, maxLines)}/{maxLines} lines, {maxCharsPerLine} characters max per line
                        </p>
                        <textarea
                            value={userText}
                            onChange={handleTextChange}
                            placeholder="Type your neon message..."
                            className="w-full px-4 py-2 min-h-[120px] rounded-md bg-gray-800 border border-amber-500 focus:outline-none resize-none"
                            rows={maxLines}
                        />

                        {userText.split('\n').some(line => line.length >= maxCharsPerLine) && (
                            <p className="text-red-400 text-xs mt-1">
                                You have exceeded the maximum characters per line.
                            </p>
                        )}

                        {/* Color Picker */}
                        <div className="flex space-x-4">
                            {colors.map((color) => (
                                <button
                                    key={color.name}
                                    onClick={() => setSelectedColor(color)}
                                    className="w-10 h-10 rounded-full"
                                    style={{
                                        backgroundColor: color.hex,
                                        border: selectedColor.name === color.name ? '2px solid white' : '2px solid transparent',
                                    }}
                                />
                            ))}
                        </div>

                        {/* Size Selector */}
                        <select
                            value={selectedSize.width}
                            onChange={(e) => {
                                const size = sizes.find((s) => s.width === e.target.value);
                                if (size) setSelectedSize(size);
                            }}
                            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-amber-500 focus:outline-none text-white"
                        >
                            {sizes.map((size) => (
                                <option key={size.width} value={size.width}>
                                    {size.width}
                                </option>
                            ))}
                        </select>
                        <p className="text-amber-400 italic text-sm">{selectedSize.note}</p>

                        {/* Font Selector */}
                        <div className="mt-4">
                            <label className="text-sm text-amber-500 font-semibold">Choose a Font:</label>
                            <select
                                value={selectedFont.name}
                                onChange={(e) => {
                                    const font = fonts.find(f => f.name === e.target.value);
                                    if (font) setSelectedFont(font);
                                }}
                                className="w-full mt-2 px-4 py-2 rounded-md bg-gray-800 border border-amber-500 focus:outline-none text-white"
                            >
                                {fonts.map((font) => (
                                    <option key={font.name} value={font.name}>{font.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Image Upload */}
                        <div className="mt-4 space-y-2">
                            <label className="text-sm">Upload your own background:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="block w-full text-sm text-gray-300 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-amber-500 file:text-white hover:file:bg-amber-600"
                            />
                            <button
                                onClick={() => setSelectedBg(backgroundImages[0])}
                                className="text-sm underline text-amber-400"
                            >
                                Reset to default background
                            </button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-1 md:col-span-2 flex flex-col">
                        <div className="flex items-center justify-center text-amber-500 mb-4 space-x-2 select-none">
                            <span className="text-sm">↔</span>
                            <span className="text-sm font-semibold">{selectedSize.width}</span>
                            <span className="text-sm">↔</span>
                        </div>

                        <div
                            className="relative w-full h-[500px] border-2 border-amber-500 bg-black bg-center bg-no-repeat bg-contain rounded-md flex items-center justify-center px-4 box-border"
                            style={{ backgroundImage: `url(${selectedBg})` }}
                        >
                            <h1
                                className="text-4xl md:text-5xl font-bold text-center whitespace-pre-wrap break-words"
                                style={{
                                    color: selectedColor.hex,
                                    fontFamily: selectedFont.css,
                                    textShadow: `
                0 0 5px ${selectedColor.hex},
                0 0 10px ${selectedColor.hex},
                0 0 20px ${selectedColor.hex},
                0 0 40px ${selectedColor.hex}
            `,
                                }}
                            >
                                {userText || 'Your Neon Text'}
                            </h1>
                        </div>



                        {/* Background Thumbnails */}
                        <div className="flex mt-6 items-start space-x-4 flex-wrap">
                            {backgroundImages.map((bg, index) => (
                                <img
                                    key={index}
                                    src={bg}
                                    alt={`bg-${index}`}
                                    onClick={() => setSelectedBg(bg)}
                                    className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${selectedBg === bg ? 'border-white' : 'border-transparent'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <NeonOnDemand />
        </div>
    );
};

export default MainNeon;
