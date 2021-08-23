import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import QRCode from 'react-native-qrcode-scanner';

import {scanQRCode} from '../../utils/Api';
import strings from '../../utils/Strings';
import Loader from '../../utils/Loader';

// 6d5c3201c1075b1b1bbb095e8dc30b58
export default function Scanner({route, navigation}) {
  const [accesState, setaccesState] = useState(false);
  const [bussy, setbussy] = useState(false);
  useEffect(() => {
    if (route.params?.accesState) {
      setaccesState(route.params.accesState);
    }
  }, [route.params?.accesState]);

  const onScan = async (e) => {
    let userRequest = {
      e: e.data,
      a: accesState,
      d: DeviceInfo.getUniqueId(),
    };
    setbussy(true);
    const response = await scanQRCode(userRequest);
    const resp = await response.json();

    if (!response.ok) {
      Alert.alert(strings.ApiFailure, strings.ApiFailureMessage);
    } else {
      await navigation.navigate('Home', {
        screen: 'Home',
        params: {message: resp},
      });
    }
  };
  if (bussy) {
    return <Loader />;
  }
  return (
    <QRCode
      onRead={onScan}
      showMarker={true}
      checkAndroid6Permissions={true}
      markerStyle={{borderColor: '#bff', borderRadius: 35}}
    />
  );
}
