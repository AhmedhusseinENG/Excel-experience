import React, { useState, useRef, useEffect } from 'react';
import { CellData } from '../types';

interface CellProps {
  cellKey: string;
  data: CellData;
  isSelected: boolean;
  isEditing: boolean;
  onSelect: (cellKey: string) => void;
  onEdit: (cellKey: string) => void;
  onUpdate: (cellKey: string, value: string) => void;
  onStopEdit: () => void;
}

const Cell: React.FC<CellProps> = ({ 
  cellKey, 
  data, 
  isSelected, 
  isEditing, 
  onSelect, 
  onEdit, 
  onUpdate, 
  onStopEdit 
}) => {
  const [editValue, setEditValue] = useState(data.value || '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  useEffect(() => {
    setEditValue(data.value || '');
  }, [data.value]);

  const handleClick = () => {
    onSelect(cellKey);
  };

  const handleDoubleClick = () => {
    onEdit(cellKey);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onUpdate(cellKey, editValue);
      onStopEdit();
    } else if (e.key === 'Escape') {
      setEditValue(data.value || '');
      onStopEdit();
    }
  };

  const handleBlur = () => {
    onUpdate(cellKey, editValue);
    onStopEdit();
  };

  const cellStyle = {
    fontWeight: data.style?.bold ? 'bold' : 'normal',
    fontStyle: data.style?.italic ? 'italic' : 'normal',
    textDecoration: data.style?.underline ? 'underline' : 'none',
    fontSize: data.style?.fontSize ? `${data.style.fontSize}px` : '14px',
    color: data.style?.color || '#000000',
    backgroundColor: data.style?.backgroundColor || 'transparent',
    textAlign: data.style?.textAlign || 'left',
  };

  return (
    <div 
      className={`
        relative border border-gray-200 h-8 min-w-[100px] flex items-center cursor-cell hover:bg-blue-50 transition-colors
        ${isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : ''}
        ${isEditing ? 'ring-2 ring-blue-600' : ''}
      `}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      style={cellStyle}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          className="w-full h-full px-2 outline-none bg-transparent text-sm"
          style={cellStyle}
        />
      ) : (
        <div className="px-2 w-full h-full flex items-center text-sm truncate">
          {data.value || ''}
        </div>
      )}
    </div>
  );
};

export default Cell;