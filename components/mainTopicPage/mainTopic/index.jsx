"use client";
import React, { useState } from 'react';
import mainTopicMockData from '@/public/mainTopicMockData';

const MainTopic = ({ onTopicSelect, activeId }) => {
    const [activeTopic, setActiveTopic] = useState(activeId || null); 

    const handleTopicClick = (topic) => {
        setActiveTopic(topic.id);
        onTopicSelect(topic);
    };

    return (
        <div
            className="flex flex-col w-full gap-8 rounded-lg bg-white border border-tertiary-50"
            style={{
                boxShadow: "0px 12px 24px -4px #919EAB29",
            }}
        >
            <h2 className="font-Inter font-bold text-[32px] leading-[54px] text-tertiary-800 p-6 pb-0">
                Ana Topikler
            </h2>
            <div className="flex flex-col space-y-4 w-full">
                {/* Ana Topikler */}
                {mainTopicMockData.map((topic, index) => (
                    <div
                        key={index}
                        onClick={() => handleTopicClick(topic)}
                        className={`flex items-center gap-3 cursor-pointer px-6 rounded-md ${
                            activeTopic === topic.id ? 'bg-[#fff]' : 'hover:bg-purple-100'
                        }`}
                        style={{
                            position: "relative",
                        }}
                    >
                        {/* Aktif Çizgi */}
                        {activeTopic === topic.id && (
                            <div
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    width: "5px",
                                    height: "42px",
                                    backgroundColor: "#915DFF",
                                    borderRadius: "0px 12px 12px 0px",
                                }}
                            ></div>
                        )}
                        {/* İkon */}
                        <div className="text-[32px] rounded-[30px] bg-[#fff] m-2">{topic.icon}</div>
                        {/* Ana Konu Başlığı */}
                        <div
                            className={`font-lexend font-bold text-[16px] leading-[24px] ${
                                activeTopic === topic.id ? 'text-tertiary-400' : 'text-tertiary-800'
                            }`}
                        >
                            {topic.mainTopic}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainTopic;
