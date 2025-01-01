"use client";
import PageContainer from '@/containers/PageContainers';
import React, { useState } from 'react';
import TopicDetails from './topicDetails';
import MainTopic from './mainTopic';
import mainTopicMockData from '@/public/mainTopicMockData';

const MainTopicPage = () => {
    const [selectedTopic, setSelectedTopic] = useState(mainTopicMockData[0]);

    const handleTopicSelect = (topic) => {
        setSelectedTopic(topic);
    };

    return (
        <section className="my-6">
            <PageContainer
                style={{
                    boxShadow: "-20px 20px 40px -4px #919EAB3D, 0px 0px 2px 0px #919EAB3D",
                }}
                className="bg-[#fff] rounded-3xl p-6"
            >
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Ana Başlıklar */}
                    <div className="w-full md:w-1/3 ">
                        <MainTopic
                            onTopicSelect={handleTopicSelect}
                            activeId={selectedTopic?.id} 
                        />
                    </div>
                    {/* Alt Başlıklar */}
                    <div className="w-full md:w-2/3">
                        <TopicDetails selectedTopic={selectedTopic} />
                    </div>
                </div>
            </PageContainer>
        </section>
    );
};

export default MainTopicPage;
