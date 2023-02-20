import React, { useState, useEffect, useMemo, ReactNode } from 'react';
import AppLayout from '../components/app-layout';

const HomePage: React.FC = (props) => {
  return (
    <div
      style={{
        padding: '20px',
        border: '5px dashed teal',
        width: '100%',
        height: '100vh',
      }}
    >
      <AppLayout children='testing' routerPath='home' />
    </div>
  );
};

export default HomePage;
