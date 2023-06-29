import React from 'react'

export default function TableSkeletonRow() {
    return (
        <div className="flex items-center space-x-12 mt-4 px-6">
            <div className="w-[5%] h-8 shrink-0 rounded-full bg-dark-layer-1"></div>
            <div className="w-[39%] h-8  rounded-full bg-dark-layer-1"></div>
            <div className="w-[15%] h-8 rounded-full bg-dark-layer-1"></div>
            <div className="w-[17%] h-8 rounded-full bg-dark-layer-1"></div>
            <div className="w-[17%] h-8 rounded-full bg-dark-layer-1"></div>
            <div className="w-[7%] h-8 rounded-full bg-dark-layer-1"></div>
        </div>
    );
}
