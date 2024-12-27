"use client";
import React, { useState } from "react";
import PageContainer from "@/containers/PageContainers";
import successStoriesData from "@/public/successStoryMockData";
import TopSvg from "@/components/successStories/topSvg";
import ImageSection from "@/components/successStories/imageSection";
import InfoSection from "@/components/successStories/infoSection";
import BottomInfoSection from "@/components/successStories/bottomInfoSection";

const SuccessStories = () => {
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    const handleNext = () => {
        if (currentStoryIndex < successStoriesData.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStoryIndex > 0) {
            setCurrentStoryIndex(currentStoryIndex - 1);
        }
    };

    const currentStory = successStoriesData[currentStoryIndex];

    return (
        <section>
            <PageContainer>
                <div className="w-full h-auto  rounded-tl-[24px] bg-white shadow-[0px_12px_32px_0px_rgba(160,160,160,0.12)] flex flex-col lg:flex-row lg:items-stretch py-8 ">
                    {/* ImageSection */}
                    <div className="w-full lg:w-1/2 h-full">
                        <ImageSection
                            imageSrc={currentStory.image}
                            altText={currentStory.name}
                        />
                    </div>

                    {/* Wrapper Div */}
                    <div className="w-full pr-8 lg:w-1/2 flex flex-col justify-between gap-3 sm:gap-8 relative">
                        <TopSvg />

                        <InfoSection
                            name={currentStory.name}
                            sector={currentStory.sector}
                            goal={currentStory.goal}
                            solution={currentStory.solution}
                            comment={currentStory.comment}
                        />

                        <BottomInfoSection
                            avatarSrc={currentStory.image}
                            sector={currentStory.sector}
                            onPrevious={handlePrevious}
                            onNext={handleNext}
                            disablePrevious={currentStoryIndex === 0}
                            disableNext={currentStoryIndex === successStoriesData.length - 1}
                        />
                    </div>
                </div>
            </PageContainer>
        </section>
    );
};

export default SuccessStories;
