import React from 'react';
import Link33 from  "../assets/Link.png";
import Async20 from  "../assets/Arrow Sync.png" ;
import ArrowDark from  "../assets/Arrow Split dark.png" ;
import More from  "../assets/More.png";
import ArrowSplit from  "../assets/Arrow Split.png";
import Add from  "../assets/Add.png";

const ActionTabs: React.FC = () => {
  return (
    <div className="mb-[1px] bg-white border-b border-gray-200 pl-8 pr-[15px]  h-[36px]">
      <div className="flex  items-center justify-between  ">
        <div className="flex flex-1  items-center justify-between max-w-[631px] space-x-2 bg-[#E2E2E2] text-green-800 px-3 h-[36px]  text-sm font-medium">
          <div className='flex items-center justify-center gap-2'>

            <div className='flex items-center justify-center gap-1 bg-[#EEEEEE] h-6 ml-1 p-1 rounded  '>
              <img className='cursor-pointer' src={Link33} alt="" />
              <span className='text-[#545454] text-xs font-normal '>Q3 Financial Overview</span>
            </div>
            <span> <img className='cursor-pointer' src={Async20} alt="Arrow Sync" /> </span>
            
          </div>

        </div>

        <div className="flex items-center justify-between  ml-8">
          <div className="flex items-center justify-center space-x-2 gap-1 w-[132px]  bg-[#D2E0D4] text-[#505450]  px-3 py-2 font-medium  text-sm/5 ">
          <img src={ArrowDark} alt="" />
            <span>ABC</span>
          <img className='cursor-pointer' src={More} alt="" />
          </div>
          
          <div className="flex items-center justify-center gap-1 mr-[0.5px] ml-[0.5px] min-w-[251px] w-[265px] space-x-2 bg-[#DCCFFC] text-[#463E59]  px-3 py-2  font-medium  text-sm/5  ">
            <img  src={ArrowSplit} alt="" />
            <span>Answer a question</span>
            <img className='cursor-pointer' src={More} alt="" />
          </div>
          
          <div className="flex items-center justify-center gap-1 space-x-2 w-[133px] bg-[#FAC2AF] text-[#695149] px-3 py-2  font-medium  text-sm/5">
          <img src={ArrowSplit} alt="" />
            <span>Extract</span>
            <img className='cursor-pointer' src={More} alt="" />
          </div>
          
          <button className="flex items-center justify-center w-[134px] bg-[#EEEEEE] p-2  hover:bg-gray-100 h-[36px] transition-colors">
            <img  src={Add} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionTabs;