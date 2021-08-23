import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import strings from '../../utils/Strings';
import {pallets} from '../../utils/pallets';
import {styles} from '../../utils/Styles';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.splashcontainer}>
      <StatusBar
        backgroundColor={pallets.TopBottomBar}
        barStyle="light-content"
      />
      <View>
        <Image
          source={require('../../assets/qrcode-tetris.gif')}
          style={styles.splashlogo}
        />
      </View>
      <Animatable.View
        style={[
          styles.splashfooter,
          {
            backgroundColor: 'green',
          },
        ]}
        animation="fadeInUpBig">
        <Text
          style={[
            styles.splashtitle,
            {
              color: '#fff',
            },
          ]}>
          {strings.SplashScreenTitle}
        </Text>
        <View style={styles.splashbutton}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.splashsignIn}>
              <Text style={styles.splashtextSign}>
                {strings.SplashScreenBottunTitle}
              </Text>
              <MaterialIcons name="navigate-next" color="#fff" size={30} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
export default SplashScreen;
