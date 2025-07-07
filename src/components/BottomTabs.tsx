import React, { useState } from 'react';
import PlusIcon0 from "../assets/Plus Icon.png" ;

const BottomTabs: React.FC = () => {
  // to store selected cell
  const [activeTab, setActiveTab] = useState('All Orders');
  // buttons we have
  const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

  return (
    <div className="bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex items-center space-x-1">
        {/* we make a looping to display buttons without repeat (dynamic)  
        and define selected cell to apply conditions styled for selected */}
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-[10px] text-base font-medium  transition-colors ${
              activeTab === tab
                ? 'bg-[#E8F0E9] text-[#3E5741] font-semibold border-t-2 border-[#4B6A4F]'
                : 'text-[#757575] hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
        
        <button className="p-2 rounded hover:bg-gray-100 transition-colors ml-2">
         <img src={PlusIcon0} alt="" />
        </button>
      </div>
    </div>
  );
};

export default BottomTabs;