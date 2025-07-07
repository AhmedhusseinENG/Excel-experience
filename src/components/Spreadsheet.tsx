import React, { useState, useCallback } from 'react';
import Cell from './Cell';
import { CellData, SheetData } from '../types';

interface SpreadsheetProps {
  onCellSelect: (cellKey: string) => void;
  onCellValueChange: (value: string) => void;
  selectedCell: string | null;
  formulaValue: string;
}

const Spreadsheet: React.FC<SpreadsheetProps> = ({ 
  onCellSelect, 
  onCellValueChange, 
  selectedCell,
  formulaValue 
}) => {
  const [sheetData, setSheetData] = useState<SheetData>({});
  const [editingCell, setEditingCell] = useState<string | null>(null);

  const ROWS = 100;
  const COLS = 26;

  const getColumnLabel = (index: number): string => {
    return String.fromCharCode(65 + index);
  };

  const getCellKey = (row: number, col: number): string => {
    return `${getColumnLabel(col)}${row + 1}`;
  };

  const handleCellSelect = useCallback((cellKey: string) => {
    setEditingCell(null);
    onCellSelect(cellKey);
  }, [onCellSelect]);

  const handleCellEdit = useCallback((cellKey: string) => {
    setEditingCell(cellKey);
  }, []);

  const handleCellUpdate = useCallback((cellKey: string, value: string) => {
    setSheetData(prev => ({
      ...prev,
      [cellKey]: { value, ...prev[cellKey] }
    }));
    onCellValueChange(value);
  }, [onCellValueChange]);

  const handleStopEdit = useCallback(() => {
    setEditingCell(null);
  }, []);

  // Update cell value when formula bar changes
  React.useEffect(() => {
    if (selectedCell && formulaValue !== (sheetData[selectedCell]?.value || '')) {
      setSheetData(prev => ({
        ...prev,
        [selectedCell]: { value: formulaValue, ...prev[selectedCell] }
      }));
    }
  }, [selectedCell, formulaValue, sheetData]);

  return (
    <div className="flex-1 overflow-auto bg-white">
      <div className="inline-block min-w-full">
        {/* Column Headers */}
        <div className="flex sticky top-0 z-10 bg-gray-50 border-b border-gray-200">
          <div className="w-12 h-8 border-r border-gray-200 flex items-center justify-center bg-gray-100 text-xs font-medium text-gray-600">
            
          </div>
          {Array.from({ length: COLS }, (_, colIndex) => (
            <div 
              key={colIndex}
              className="min-w-[100px] h-8 border-r border-gray-200 flex items-center justify-center bg-gray-100 text-xs font-medium text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors"
            >
              {getColumnLabel(colIndex)}
            </div>
          ))}
        </div>

        {/* Rows */}
        {Array.from({ length: ROWS }, (_, rowIndex) => (
          <div key={rowIndex} className="flex">
            {/* Row Header */}
            <div className="w-12 h-8 border-r border-b border-gray-200 flex items-center justify-center bg-gray-100 text-xs font-medium text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">
              {rowIndex + 1}
            </div>
            
            {/* Cells */}
            {Array.from({ length: COLS }, (_, colIndex) => {
              const cellKey = getCellKey(rowIndex, colIndex);
              const cellData = sheetData[cellKey] || { value: '' };
              
              return (
                <Cell
                  key={cellKey}
                  cellKey={cellKey}
                  data={cellData}
                  isSelected={selectedCell === cellKey}
                  isEditing={editingCell === cellKey}
                  onSelect={handleCellSelect}
                  onEdit={handleCellEdit}
                  onUpdate={handleCellUpdate}
                  onStopEdit={handleStopEdit}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spreadsheet;