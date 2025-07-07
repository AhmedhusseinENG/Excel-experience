import React, { Fragment, useState } from 'react';
import { TaskData } from '../types';
import StatusBadge from './StatusBadge';
import PriorityBadge from './PriorityBadge';

import NumberSymbol from "../assets/Number Symbol.png";
import Briefcase from "../assets/Briefcase.png";
import Cheveron from "../assets/Chevron.png";
import Calender30 from "../assets/Calendar.png";
import CheveronCircle from "../assets/Chevron Circle.png";
import Person0 from "../assets/Person.png";
import Globe20 from "../assets/Globe.png";
import Emoje from "../assets/Emoji.png";


interface DataTableProps {
  data: TaskData[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  // for store cells that we apply effects on it
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const [editingCell, setEditingCell] = useState<string | null>(null);

  // to make a border for selected cell (after one click)
  const handleCellClick = (rowId: number, column: string) => {
    const cellKey = `${rowId}-${column}`;
    setSelectedCell(cellKey);
  };

  // to active write in cell after double click
  const handleCellDoubleClick = (rowId: number, column: string) => {
    const cellKey = `${rowId}-${column}`;
    setEditingCell(cellKey);
  };

  // create a unique id for each cell to define which is clicked to apply effects
  // also change final output based on received data
  const renderCell = (rowId: number, column: string, value: any, type?: string) => {
    const cellKey = `${rowId}-${column}`;
    const isSelected = selectedCell === cellKey;
    const isEditing = editingCell === cellKey;
    // variable that contain Final output
    let cellContent = value;
    
    if (type === 'status' && typeof value === 'string') {
      cellContent = <StatusBadge status={value as any} />;
    } else if (type === 'priority' && typeof value === 'string') {
      cellContent = <PriorityBadge priority={value as any} />;
    } else if (type === 'url' && typeof value === 'string') {
      cellContent = (
        <a href={value} className="underline text-[#121212] text-xs font-normal truncate block max-w-[120px]">
          {value}
        </a>
      );
    } else if (type === 'currency' && typeof value === 'string') {
      const match = value.match(/^([\d,]+)\s*(\D+)$/);

      const number = match ? match[1] : value;
      const currency = match ? match[2] : "";
      cellContent =
        <Fragment>
        
        <span className='text-[#121212] text-xs font-normal'>
          {number}
        </span>
         <span className='ml-1 text-[#AFAFAF] font-medium text-xs ' >
         {currency}
       </span>
        </Fragment>
        ;
    }


   

    return (
      //  make a conditions that change style when condition is true
      <td
        key={cellKey}
        className={`w-[125px]  px-3 py-2 text-[#121212] text-xs font-normal border-r border-gray-200 cursor-cell hover:bg-gray-50 transition-colors ${
          isSelected ? 'bg-blue-50 ring-1 ring-blue-500' : ''  
          } ${column == "jobRequest" ? "w-[265px]" : ""}
           ${["submitted", "dueDate", "estValue"].includes(column) ? "text-end" : ""}
           ${["status", "priority"].includes(column) ? "text-center" : ""}
           ${column == "Empty" ? "border-dashed border-[#CBCBCB]   border-r-[1.6px]  border-l-[1.6px]   bg-white ring-0 ring-white " : " "}  ` }
        onClick={() => handleCellClick(rowId, column)}
        onDoubleClick={() => handleCellDoubleClick(rowId, column)}
      >
        {/* if we cliked double times in cell will display input and able to write in cell
        if not will display content of cell */}
        {isEditing ? (
          <input
            type="text"
            defaultValue={typeof value === 'string' ? value : ''}
            className="w-full bg-transparent outline-none"
            onBlur={() => setEditingCell(null)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === 'Escape') {
                setEditingCell(null);
              }
            }}
            autoFocus
          />
        ) : (
          cellContent
        )}
      </td>
    );
  };

  return (
    <div className="flex-1 overflow-auto bg-white ">
      <table className="w-full ">
        <thead className="sticky top-0 ">
          <tr className=' '>  
            <th className="bg-[#EEEEEE]  pt-[5px] px-[5px] text-left text-xs font-medium text-gray-500  tracking-wider border-r  border-white w-8">
              <div className='flex items-center justify-center'> 
              <img src={NumberSymbol} alt="" />
             </div>
            </th>
            <th className="bg-[#EEEEEE] pt-[5px] px-[5px]  text-left text-xs font-medium text-gray-500  tracking-wider border-r border-white ">
              <div className="flex  items-center justify-between space-x-1">
                <div className='flex gap-1 items-center justify-center '>
                  <img src={Briefcase}  alt="" />
                <span className='text-xs font-semibold'>Job Request</span>
                </div>

                <div className='p-2 rounded '>
                  <img  className='cursor-pointer' src={Cheveron} alt="" />
                </div>

              </div>
            </th>
            <th className="bg-[#EEEEEE] pt-[5px] px-[5px] text-left text-xs font-medium text-gray-500  tracking-wider border-r border-white">
               <div className="flex items-center justify-between space-x-1">

                <div className='flex gap-1 items-center justify-center' >

                    <img src={Calender30} alt="" />
                    <span className='text-xs font-semibold' >Submitted</span>
                </div>

                <div>
                  <img className='cursor-pointer' src={Cheveron} alt="" />
                </div>
              </div> 
            </th>
            <th className="bg-[#EEEEEE] pt-[5px] px-[5px] text-left text-xs font-medium text-gray-500  tracking-wider border-r border-white">
              <div className="flex items-center justify-between space-x-1">
                <div className='flex gap-1 items-center justify-center' >
                  <img src={CheveronCircle} alt="" />
                <span className='text-xs font-semibold'>Status</span>
                </div>
                
                <div>
                  <img className='cursor-pointer' src={Cheveron} alt="" />
                </div>
              </div>
            </th>
            <th className="bg-[#EEEEEE] pt-[5px] px-[5px] text-left text-xs font-medium text-gray-500  tracking-wider border-r border-white">
              <div className="flex items-center justify-between space-x-1">
                <div className='flex gap-1 items-center justify-center'>
                  <img src={Person0} alt="" />
                <span className='text-xs font-semibold' >Submitter</span>
                </div>
                <div>
                  <img className='cursor-pointer' src={Cheveron} alt="" />
                </div>
              </div>
            </th>
            <th className="bg-[#EEEEEE] pt-[5px] px-[5px] text-left text-xs font-medium text-gray-500  tracking-wider border-r border-white">
              <div className="flex items-center justify-between space-x-1">
                <div className='flex gap-1 items-center justify-center'>
                <img src={Globe20} alt="" />
                <span className='text-xs font-semibold'>URL</span>
                </div>

                <div>
                  <img className='cursor-pointer'src={Cheveron} alt="" />
                </div>
              </div>
            </th>
            <th className="bg-[#E8F0E9] pt-[5px] px-[5px] text-left text-xs font-medium text-gray-500  tracking-wider border-r border-white">
              <div className="flex items-center justify-between space-x-1">
                <div className='flex gap-1 items-center justify-center'>
                  <img src={Emoje} alt="" />
                <span className='text-xs font-semibold'>Assigned</span>
                </div>
                
                <div>
                  <img className='cursor-pointer' src={Cheveron} alt="" />
                </div>
              </div>
            </th>
            <th className="bg-[#EAE3FC] pt-[5px] px-[5px] text-left text-xs font-medium text-gray-500  tracking-wider border-r border-white">
              <div  className='flex gap-1 items-center justify-center'>

              <span className='text-xs font-semibold'>Priority</span> 
              </div>
            </th>
            <th className=" bg-[#EAE3FC] pt-[5px] px-[5px]  text-left text-xs font-medium text-gray-500  tracking-wider border-r border-white">
              <div  className='flex gap-1 items-center justify-center'>
                
              <span className='text-xs font-semibold'> Due Date</span>
             </div>
            </th>
            <th className="bg-[#FFE9E0] pt-[5px] px-[5px] text-left text-xs font-medium text-gray-500  tracking-wider border-r border-white">
              <div className='flex gap-1 items-center justify-center'>
              <span className='text-xs font-semibold'>Est. Value</span>
                
             </div>
            </th>
            <th className= "relative pt-[5px] px-[5px] text-left text-xs font-medium text-gray-500  tracking-wider border-dashed border-[#CBCBCB]   border-r-[1.6px]  border-l-[1.6px]   ">
              {/* <div  className='flex gap-1 items-center justify-center '>
                <span className='text-xs font-semibold '></span>
              </div> */}
              <hr className='absolute -left-px bottom-0 h-[1px] w-[133px] bg-gray-200'></hr>
              
            </th>

       
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-3 py-2 text-sm text-center font-normal text-gray-500 border-r border-gray-200 w-8">
                {row.id}
              </td>
              {/* will change diplayed value based on passed data */}
              {renderCell(row.id, 'jobRequest', row.jobRequest)}
              {renderCell(row.id, 'submitted', row.submitted)}
              {renderCell(row.id, 'status', row.status, 'status')}
              {renderCell(row.id, 'submitter', row.submitter)}
              {renderCell(row.id, 'url', row.url, 'url')}
              {renderCell(row.id, 'assigned', row.assigned)}
              {renderCell(row.id, 'priority', row.priority, 'priority')}
              {renderCell(row.id, 'dueDate', row.dueDate)}
              {renderCell(row.id, 'estValue', row.estValue, 'currency')}
              {renderCell(row.id, 'Empty', "")}
            </tr>
          ))}
          
          {/* Wr create Empty rows That numbers is 20 row */}
          {Array.from({ length: 20 }, (_, index) => (
            <tr key={`empty-${index + data.length + 1}`} className="hover:bg-gray-50 transition-colors">
              <td className="px-3 py-2 text-sm text-gray-500 border-r border-gray-200 w-8">
                {data.length + index + 1}
              </td>
              {/* here we create cells in each row and we have 10 cells for each row */}
              {Array.from({ length: 10 }, (_, colIndex) => (
                <td
                  key={`empty-${index}-${colIndex}`}
                  className={`px-3 py-2 text-sm border-r border-gray-200 cursor-cell hover:bg-gray-50 transition-colors h-10
                    ${selectedCell === `${data.length + index + 1}-col-${colIndex}`   ? "bg-blue-50 ring-1 ring-blue-500" : ""}
                    ${colIndex == 9 ? "border-dashed border-[#CBCBCB]   border-r-[1.6px]  border-l-[1.6px] bg-white ring-0 ring-white " : ""}
                     `}
                  onClick={() => handleCellClick(data.length + index + 1, `col-${colIndex}`)}
                  onDoubleClick={() => handleCellDoubleClick(data.length + index + 1, `col-${colIndex}`)}
                >
             
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;