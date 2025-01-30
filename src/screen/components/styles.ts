import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: colors.white,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    height: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  connectedDeviceText: {
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 10,
    width: '80%',
    fontWeight: '600',
    marginTop: 20,
  },
  deviceName: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    width: '70%',
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
  },
  iconStyle: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  bluetoothImage: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  scanBtnStyle: {
    borderColor: colors.royalBlue,
    borderWidth: 1,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 6,
  },
  connectText: {color: colors.royalBlue, textDecorationLine: 'underline'},
});
