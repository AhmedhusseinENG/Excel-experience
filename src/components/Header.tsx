import React from 'react';
import avatar from "../assets/avatar.png";
import Panel from "../assets/Panel.png";
import ChevronSm from "../assets/Small Chevron.png";
import IconFrame from "../assets/Icon frame.png";
import Search2 from '../assets/search2.png';
import Notification from "../assets/Notification_bell.png";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 p-4  pt-[10px] pb-2 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center  text-sm text-gray-600">
          <img className='mr-4 cursor-pointer' src={Panel} alt="" />
          <span className='mr-[5px] text-[#AFAFAF] text-sm font-medium'>Workspace</span>
          <img className='mr-1' src={ChevronSm} alt="" />
          <span className='mr-1 text-[#AFAFAF] text-sm font-medium'>Folder 2</span>
          <img className='mr-1' src={ChevronSm} alt="" />
          <span className="mr-2 text-[#121212] font-medium text-sm">Spreadsheet 3</span>
         <img className='cursor-pointer' src={IconFrame} alt="" />
        </div>

        <div className="flex items-center space-x-1">
          <div className="flex items-center   ">
            <img  src={Search2} alt='' className=" cursor-pointer -mr-6 z-10" />
            <input 
              type="text" 
              placeholder="Search within sheet"
            className='placeholder:pl-5  indent-[12px] p-3 pl-[16px] pr-[16px] bg-[#F6F6F6] text-[#757575]  text-sm font-normal  rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-[173px]'
            />
          </div>
          
          <div className="flex items-center space-x-2">

            <img className='cursor-pointer' src={Notification} alt="" />
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <img className='cursor-pointer w-full h-full' src={avatar} alt="" />
              </div>
              <div className="text-sm">
                <div className="font-normal text-[#121212] text-xs">John Doe</div>
                <div className="font-normal text-[#757575]  text-[10px]/[12px]">john.doe...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;