import React from 'react';
import {BleManagerProvider} from '../contexts/BleManagerProvider';
import BleConnector from './components/BleConnector';

const BleViewer: React.FC = () => {
  return (
    <BleManagerProvider>
      <BleConnector />
    </BleManagerProvider>
  );
};

export default BleViewer;
