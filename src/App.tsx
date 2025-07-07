import React from 'react';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import ActionTabs from './components/ActionTabs';
import DataTable from './components/DataTable';
import BottomTabs from './components/BottomTabs';
import { mockData } from './data/mockData';

// Function to login text in a Console as a dynamic UI
function App() {
  const handleToolbarAction = (action: string) => {
    console.log(`Toolbar action executed: ${action}`);
  };

  return (
    <div className="h-screen flex flex-col bg-[#EEEEEE]">
      <Header />
      <Toolbar onAction={handleToolbarAction} />
      <ActionTabs />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DataTable data={mockData} />
      </div>
      <BottomTabs />
    </div>
  );
}

export default App;