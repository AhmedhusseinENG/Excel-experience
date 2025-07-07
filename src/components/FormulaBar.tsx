import React from 'react';

interface FormulaBarProps {
  selectedCell: string | null;
  cellValue: string;
  onValueChange: (value: string) => void;
}

const FormulaBar: React.FC<FormulaBarProps> = ({ selectedCell, cellValue, onValueChange }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-100 px-3 py-1 rounded text-sm font-medium text-gray-700 min-w-[60px] text-center">
            {selectedCell || 'A1'}
          </div>
          <span className="text-gray-400">fx</span>
        </div>
        <div className="flex-1">
          <input 
            type="text"
            value={cellValue}
            onChange={(e) => onValueChange(e.target.value)}
            placeholder="Enter formula or value"
            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default FormulaBar;