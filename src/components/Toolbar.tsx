import React from 'react';
import CheveronDouble from "../assets/Chevron Double.png";
import Separator from "../assets/Separator--V--1px.png";
import Eye from "../assets/Eye.png";
import ArrowSort from "../assets/Arrow Sort.png";
import Filter from "../assets/Filter.png";
import AutoFit from "../assets/Arrow Autofit.png";
import ArrowDownload from "../assets/Arrow Download.png";
import ArrowUpload from "../assets/Arrow Upload.png";
import ShareZ from "../assets/Share.png";
import BigArrow from "../assets/Big Arrow Split.png";


interface ToolbarProps {
  onAction: (action: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onAction }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-2 py-[5px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-between  space-x-2 text-sm text-gray-600">
            <div className='flex items-center gap-1   '>
              
            <span className='font-normal text-sm text-[#121212]'>Tool bar</span>
          <img src={CheveronDouble} alt="" />
            </div>
            
        
          </div>
          <div className='ml-2 -mr-2'>
                <img src={Separator} alt="" />
            </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => onAction('hide-fields')}
              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <img src={Eye} alt="" />
              <span className='font-normal text-sm text-[#121212] '>Hide fields</span>
            </button>
            
            <button 
              onClick={() => onAction('sort')}
              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <img src={ArrowSort} alt="" />
              <span className='font-normal text-sm text-[#121212]'>Sort</span>
            </button>
            
            <button 
              onClick={() => onAction('filter')}
              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <img src={Filter} alt="" />
              <span className='font-normal text-sm text-[#121212]'>Filter</span>
            </button>
            
            <button 
              onClick={() => onAction('cell-view')}
              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <img src={AutoFit} alt="" />
              <span className='font-normal text-sm text-[#121212]'>Cell view</span>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button 
            // when click button will display "import" in Console
            onClick={() => onAction('import')}
            className="flex items-center space-x-2 px-3 pl-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md border border-[#EEEEEE] transition-colors  "
          >
           <img className='-mr-1' src={ArrowDownload} alt="" />
            <span className='font-normal text-sm text-[#545454]'>Import</span>
          </button>
          
          <button 
              // when click button will display "export" in Console
            onClick={() => onAction('export')}
            className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md border border-[#EEEEEE] pl-2 transition-colors"
          >
            <img className='-mr-1' src={ArrowUpload} alt="" />
            <span className='font-normal text-sm text-[#545454]' >Export</span>
          </button>
          
          <button   // when click button will display "share" in Console
            
            onClick={() => onAction('share')}
            className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md border border-[#EEEEEE] pl-2 transition-colors"
          >
            <img className='-mr-1' src={ShareZ} alt="" />
            <span className='font-normal text-sm text-[#545454]'>Share</span>
          </button>
          
          <button 
              // when click button will display "new-action" in Console
            onClick={() => onAction('new-action')}
            className="flex items-center w-[150px] space-x-2 px-6 py-2 text-sm text-white bg-[#4B6A4F] hover:bg-[#3d5640] rounded-md transition-colors"
          >
            <img className='-mr-1' src={BigArrow} alt="" />
            <span className='text-sm text-[#FFFFFF] font-medium '>New Action</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;