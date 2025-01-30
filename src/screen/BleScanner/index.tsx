import React from 'react';
import {BleManagerProvider} from '../components/BleManagerProvider';
import BleConnector from '../components/BleConnector';

const BleManagerScanner: React.FC = () => {
  return (
    <BleManagerProvider>
      <BleConnector />
    </BleManagerProvider>
  );
};

export default BleManagerScanner;
