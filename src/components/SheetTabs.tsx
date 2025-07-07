import React, { useState } from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';

const SheetTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Sheet1');
  const [sheets] = useState(['Sheet1', 'Sheet2', 'Sheet3']);

  const handleTabClick = (sheetName: string) => {
    console.log(`Switching to sheet: ${sheetName}`);
    setActiveTab(sheetName);
  };

  return (
    <div className="bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex items-center space-x-1">
        {sheets.map((sheet) => (
          <button
            key={sheet}
            onClick={() => handleTabClick(sheet)}
            className={`
              px-4 py-2 text-sm rounded-t-lg border-b-2 transition-colors hover:bg-gray-50
              ${activeTab === sheet 
                ? 'border-blue-500 text-blue-600 bg-blue-50' 
                : 'border-transparent text-gray-600 hover:text-gray-800'
              }
            `}
          >
            {sheet}
          </button>
        ))}
        
        <button 
          onClick={() => console.log('Add new sheet')}
          className="p-2 rounded hover:bg-gray-100 transition-colors ml-2"
          title="Add sheet"
        >
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
        
        <button 
          onClick={() => console.log('More sheet options')}
          className="p-2 rounded hover:bg-gray-100 transition-colors"
          title="All sheets"
        >
          <MoreHorizontal className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default SheetTabs;