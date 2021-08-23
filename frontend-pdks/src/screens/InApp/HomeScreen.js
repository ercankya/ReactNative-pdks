import React from 'react';
import {Text, View, TouchableOpacity, Image, Linking} from 'react-native';

import strings from '../../utils/Strings';
import {styles} from '../../utils/Styles';
import Loader from '../../utils/Loader';

export default function Home({route, navigation}) {
  const [message, setmessage] = React.useState(
    strings.HomeScreenInitialMessage,
  );

  React.useEffect(() => {
    if (route.params?.message) {
      setmessage(route.params.message);
    }
  }, [route.params?.message]);

  const scanQRCode = async (e) => {
    navigation.navigate('ScannerScreen', {
      accesState: e,
    });
  };
  return (
    <View style={styles.containerf}>
      <TouchableOpacity
        onPress={() => Linking.openURL('http://metasoft.com.tr/')}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/mtsft.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          scanQRCode(true);
        }}>
        <Text style={styles.onBtn}> {strings.HomeScreenAccesButtonEnter} </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          scanQRCode(false);
        }}>
        <Text style={styles.offBtn}> {strings.HomeScreenAccesButtonExit} </Text>
      </TouchableOpacity>
      <Text style={styles.text_response}>
        {strings.HomeScreenResponsemessage}: {message}{' '}
      </Text>
      <Loader />
    </View>
  );
}
