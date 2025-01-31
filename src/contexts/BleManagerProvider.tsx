import React, {createContext, useState, useEffect} from 'react';
import {PermissionsAndroid, Platform, Alert} from 'react-native';
import BleManager from 'react-native-ble-manager';

export interface BleDevice {
  id: string;
  name: string | null;
}

interface BleContextProps {
  devices: BleDevice[];
  scanDevices: () => void;
  isScanning: boolean;
}

export const BleContext = createContext<BleContextProps>({
  devices: [],
  scanDevices: () => {},
  isScanning: false,
});

export const BleManagerProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [devices, setDevices] = useState<BleDevice[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    BleManager.start({showAlert: false});
  }, []);

  const requestPermissions = async (): Promise<boolean> => {
    if (Platform.OS === 'android') {
      try {
        const result = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ]);

        return Object.values(result).every(
          status => status === PermissionsAndroid.RESULTS.GRANTED,
        );
      } catch (error) {
        console.error('Permission request error:', error);
        return false;
      }
    }
    return true;
  };

  const scanDevices = async () => {
    const permissionGranted = await requestPermissions();
    if (!permissionGranted) {
      Alert.alert(
        'Permission Denied',
        'Bluetooth permissions are required to scan devices.',
      );
      return;
    }

    setDevices([]);
    setIsScanning(true);

    BleManager.scan([], 10, true)
      .then(() => console.log('Scanning...'))
      .catch(error => console.error('Scan error:', error));

    setTimeout(async () => {
      try {
        const scannedDevices = await BleManager.getDiscoveredPeripherals();
        setDevices(
          scannedDevices.map(device => ({
            id: device.id,
            name: device.name || 'Unknown Device',
          })),
        );
      } catch (error) {
        console.error('Error fetching devices:', error);
      } finally {
        setIsScanning(false);
      }
    }, 10000);
  };

  return (
    <BleContext.Provider value={{devices, scanDevices, isScanning}}>
      {children}
    </BleContext.Provider>
  );
};
