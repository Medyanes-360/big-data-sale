import React from 'react';

const SearchArea = () => {
    return (
        <div className="flex items-center h-[56px] gap-2 border border-[#919eab32] rounded-lg px-[14px] py-4 w-full shadow-sm">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-midnight-950"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 17a6 6 0 100-12 6 6 0 000 12zM21 21l-4.35-4.35"
                />
            </svg>
            <input
                type="text"
                placeholder="Arama"
                className="ml-3 w-full  outline-none text-sm text-gray-600 placeholder-gray-400"
            />
        </div>
    );
};

export default SearchArea;
