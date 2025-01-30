import React from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {BleDevice} from './BleManagerProvider';
import {styles} from './styles';
import {colors} from '../../assets/colors';
import {connectedDeviceData} from './BleConnector';

interface DeviceModalProps {
  visible: boolean;
  devices: BleDevice[];
  onClose: () => void;
  onConnect: (item: connectedDeviceData) => void;
  isConnecting: boolean;
  connectingDevice: connectedDeviceData | null;
}

const DeviceModal: React.FC<DeviceModalProps> = ({
  visible,
  devices,
  onClose,
  onConnect,
  isConnecting,
  connectingDevice,
}) => {
  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Available BLE Devices</Text>

          <FlatList
            data={devices}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => onConnect(item)}
                style={styles.listItem}>
                <Text style={styles.deviceName}>
                  {item.name ?? 'Unknown Device'}
                </Text>
                {isConnecting && connectingDevice.id === item.id ? (
                  <ActivityIndicator size="small" color={colors.royalBlue} />
                ) : (
                  <Text style={styles.connectText}>Connect</Text>
                )}
              </TouchableOpacity>
            )}
          />

          <View style={styles.buttonContainer}>
            <Button color={colors.royalBlue} title="Close" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeviceModal;
