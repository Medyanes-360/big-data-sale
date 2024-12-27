"use client";
import React, { useState, useEffect } from "react";
import { mockData } from "@/public/bookDemoMockData";
import PageContainer from "@/containers/PageContainers";

const CardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    // Yön tuşları ile kontrol
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === mockData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? mockData.length - 1 : prevIndex - 1
        );
    };

    // Mouse sürükleme ile kontrol
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseUp = (e) => {
        setIsDragging(false);
        const endX = e.clientX;
        if (startX - endX > 50) handleNext();
        if (startX - endX < -50) handlePrev();
    };

    // Mobilde dokunma hareketleri ile kontrol
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        setIsDragging(false);
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) handleNext(); // Sağa kaydırma
        if (startX - endX < -50) handlePrev(); // Sola kaydırma
    };

    return (
        <section className="pt-8">
            <PageContainer>
                <div
                    className="flex flex-col shadow-[#919eab29]  rounded-3xl px-3 py-6 gap-3 md:gap-10 max-w-[521px]"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="block md:hidden font-lexend text-center text-lg font-medium text-tertiary-900">
                        Bizi Tercih Edenler
                    </div>
                    <h2 className=" hidden md:flex text-[32px] font-medium leading-[56px] font-Inter text-[#000000]">#Some history</h2>

                    {/* Kart */}
                    <div className="flex flex-col w-full gap-1 p-8 shadow-md rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={mockData[currentIndex].avatar}
                                    alt={mockData[currentIndex].name}
                                    className="w-[69px] h-[69px] rounded-full"
                                />
                                <div>
                                    <h3 className="font-lexend font-normal text-[23.07px] leading-8">{mockData[currentIndex].name}</h3>
                                    <p className="font-lexend font-light leading-7">{mockData[currentIndex].jobTitle}</p>
                                </div>
                            </div>

                            <div className="rounded-lg gap-1 flex items-center justify-center">
                                <img
                                    src="/assets/icons/9.svg"
                                    alt="Calendar"
                                    className="text-tertiary-400 border-2-tertiary-400"
                                />
                                <img
                                    src="/assets/icons/9.svg"
                                    alt="Calendar"
                                    className="text-tertiary-400 border-2-tertiary-400"
                                />
                            </div>
                        </div>
                        {/* Description kısmı */}
                        <p className="font-Inter font-normal text-[23.07px] leading-8 text-[#061c3d] line-clamp-3">
                            {mockData[currentIndex].description}
                        </p>
                        <img
                            src={mockData[currentIndex].cardImage}
                            alt={`${mockData[currentIndex].name} card`}
                            className="w-[125px] h-[125px] mt-4 mx-auto"
                        />
                    </div>
                </div>
                {/* Navigasyon */}
                <div className="flex items-center justify-center w-full max-w-xs mt-4 mx-auto">
                    <div className="flex gap-1">
                        {mockData.map((_, index) => (
                            <span
                                key={index}
                                className={`w-3 h-3 rounded-full ${index === currentIndex
                                    ? "bg-tertiary-400 w-[23.07px] h-[11.54px] rounded-[21.63]"
                                    : "bg-[#915dff09] w-[11.54px] h-[11.54px] rounded-[21.63]"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </PageContainer>
        </section>
    );
};

export default CardCarousel;
