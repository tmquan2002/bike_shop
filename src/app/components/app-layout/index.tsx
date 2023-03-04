import React from 'react';
import TopBar from './top-bar/TopBar';
import SideBar from './side-bar/SideBar';
import { Outlet } from 'react-router-dom';

const AppLayout: React.FC = () => {
  return (
    <>
      <SideBar />
      <TopBar />
      {/* <div className="page-container">{children}</div> */}
      <div className="page-container"><Outlet /></div>
    </>
  );
};

export default AppLayout;
