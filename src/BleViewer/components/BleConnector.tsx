import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Button, Alert, Image} from 'react-native';
import BleManager from 'react-native-ble-manager';
import {BleContext} from '../../contexts/BleManagerProvider';
import DeviceModal from './BleDeviceInfo';
import {styles} from './styles';
import {colors} from '../../theme/colors';
import images from '../../assets/images';

export interface connectedDeviceData {
  id: string | null;
  name: string | null;
}

const BleConnector: React.FC = () => {
  const {devices, scanDevices, isScanning} = useContext(BleContext);
  const [connectedDevice, setConnectedDevice] =
    useState<connectedDeviceData | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectingDevice, setConnectingDevice] =
    useState<connectedDeviceData | null>(null);

  const connectToDevice = async (data: any) => {
    setIsConnecting(true);
    setConnectingDevice(data);

    try {
      await BleManager.connect(data.id);
      setConnectedDevice(data);
      setModalVisible(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to device');
    } finally {
      setIsConnecting(false);
      setConnectingDevice(null);
    }
  };
  console.log(isScanning, 'isScanningisScanning');

  useEffect(() => {
    if (devices.length > 0) {
      setModalVisible(true);
    }
  }, [devices]);

  console.log(connectedDevice, 'datadatadatadata');
  return (
    <View style={styles.connectorContainer}>
      <Image source={images.loginImage} style={styles.bluetoothImage} />
      {isScanning ? (
        <Image
          style={styles.iconStyle}
          source={images.bluetoothLoader}
          resizeMode="contain"
        />
      ) : (
        <View style={styles.scanBtnStyle}>
          <Button
            title="Click Scan for Devices"
            onPress={() => {
              scanDevices();
              setConnectedDevice(null);
            }}
            color={colors.royalBlue}
          />
        </View>
      )}
      {connectedDevice && (
        <Text style={styles.connectedDeviceText}>
          Connected Device id: {`${connectedDevice.id}\n`}
          Device Name: {`${connectedDevice.name}\n`}
        </Text>
      )}

      <DeviceModal
        visible={modalVisible}
        devices={devices}
        onClose={() => setModalVisible(false)}
        onConnect={connectToDevice}
        isConnecting={isConnecting}
        connectingDevice={connectingDevice}
      />
    </View>
  );
};

export default BleConnector;
