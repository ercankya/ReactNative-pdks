import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {useTheme} from 'react-native-paper';
import {AuthContext} from '../../components/context';

import {logIn} from '../../utils/Api';
import strings from '../../utils/Strings';
import {pallets} from '../../utils/pallets';
import {styles} from '../../utils/Styles';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const {signIn} = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };
  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = async (u, p) => {
    if (u === 0 || p === 0) {
      Alert.alert(strings.InputFailureTitle, strings.InputFailureMessage, [
        {text: 'ok'},
      ]);
      return;
    }
    let userRequest = {
      u: u,
      p: p,
    };
    const resp = await logIn(userRequest);
    if (resp.token == null) {
      Alert.alert(strings.SignInFailureTitle, strings.SignInFailureMessage, [
        {text: 'ok'},
      ]);
      return;
    }
    signIn(resp);
  };

  return (
    <View style={styles.signincontainer}>
      <StatusBar
        backgroundColor={pallets.TopBottomBar}
        barStyle="light-content"
      />
      <View style={styles.signinheader}>
        <Text style={styles.signintext_header}>
          {strings.SignInScreenTopMessage}
        </Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.signinfooter,
          {
            backgroundColor: 'green',
          },
        ]}>
        <Text
          style={[
            styles.signintext_footer,
            {
              color: 'white',
            },
          ]}>
          {strings.SignInUpScreenPhoneNumber}
        </Text>
        <View style={styles.signinaction}>
          <FontAwesome name="user-o" color="white" size={20} />
          <TextInput
            placeholder={strings.SignInUpScreenPhoneNumber}
            placeholderTextColor="#666666"
            style={[
              styles.signintextInput,
              {
                color: 'white',
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.signinerrorMsg}>
              {strings.SignInUpScreenPhoneNumberInputAlert}
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.signintext_footer,
            {
              color: 'white',
              marginTop: 35,
            },
          ]}>
          {strings.SignInUpScreenPassword}
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="white" size={20} />
          <TextInput
            placeholder={strings.SignInUpScreenPassword}
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.signintextInput,
              {
                color: 'white',
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.signinerrorMsg}>
              {strings.SignInUpScreenPasswordInputAlert}
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{color: 'white', marginTop: 15}}>
            {strings.SignInScreenForgetPassword}
          </Text>
        </TouchableOpacity>
        <View style={styles.signinbutton}>
          <TouchableOpacity
            style={styles.signinsignIn}
            onPress={() => {
              loginHandle(data.username, data.password);
            }}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signinsignIn}>
              <Text
                style={[
                  styles.signintextSign,
                  {
                    color: 'white',
                  },
                ]}>
                {strings.SignInUpScreenSignButtonTitle}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={[
              styles.signinsignIn,
              {
                borderColor: pallets.TopBottomBar,
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text
              style={[
                styles.signintextSign,
                {
                  color: 'white',
                },
              ]}>
              {strings.SignInUpScreenCreateAccount}
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;
