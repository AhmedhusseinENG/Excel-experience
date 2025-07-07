import React from 'react';

interface StatusBadgeProps {
  status: 'In-process' | 'Need to start' | 'Complete' | 'Blocked';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'In-process':
        return 'bg-[#FFF3D6] text-[#85640B] border-transparent';
      case 'Need to start':
        return 'bg-[#E2E8F0] text-[#475569] border-transparent';
      case 'Complete':
        return 'bg-[#D3F2E3] text-[#0A6E3D] border-transparent';
      case 'Blocked':
        return 'bg-[#FFE1DE] text-[#C22219] border-transparent';
      default:
        return 'bg-gray-100 text-gray-800 border-transparent';
    }
  };

  return (
    <span className={` inline-flex  items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusStyles(status)}`}>
      {status}
    </span>
  );
};

export default StatusBadge;