import React from 'react';

interface PriorityBadgeProps {
  priority: 'High' | 'Medium' | 'Low';
}

const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority }) => {
  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-[#EF4D44]';
      case 'Medium':
        return 'text-[#C29210]';
      case 'Low':
        return 'text-[#1A8CFF]';
      default:
        return 'text-[#121212]';
    }
  };

  return (
    <span className={` text-xs font-semibold ${getPriorityStyles(priority)}`}>
      {priority}
    </span>
  );
};

export default PriorityBadge;