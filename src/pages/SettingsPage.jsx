import React from 'react';
import TopBar from '../Components/TopBar/TopBar';
import YourComponent from '../Components/Settings/tes';

function SettingsPage() {
  return (
    <div>
      <TopBar title="Settings"/>
      <div className="p-4">
      <YourComponent/>

      </div>
    </div>
  )
}

export default SettingsPage
