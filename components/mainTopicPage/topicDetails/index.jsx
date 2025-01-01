import React from 'react';

const TopicDetails = ({ selectedTopic }) => {
  if (!selectedTopic) {
    return (
      <div className="text-gray-500 text-sm">
        Lütfen bir ana başlık seçin.
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      {selectedTopic.subTopics.map((subTopic, index) => (
        <div
          key={index}
          className="flex gap-4 items-start border border-tertiary-50 py-6 px-4 rounded-lg shadow-md"
        >
          {/* Sıra Numarası */}
          <div
            className="flex items-center justify-center w-8 h-8 rounded-[4px] bg-[#e6dbff]  font-bold"
          >
            {index + 1}
          </div>
          {/* İçerik */}
          <div className="flex flex-col gap-5">
            {/* SubTopic Title */}
            <h4 className="font-Inter font-bold leading-10 text-[24px] text-tertiary-800">
              {subTopic.title}
            </h4>
            {/* SubTopic Description */}
            <p className="font-lexend font-medium leading-6 text-[16px] text-gray-700">
              {subTopic.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicDetails;
