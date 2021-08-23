import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {logUp} from '../../utils/Api';
import strings from '../../utils/Strings';
import {styles} from '../../utils/Styles';
import {pallets} from '../../utils/pallets';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  const createAccount = async (u, p) => {
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
    const res = await logUp(userRequest);
    if (res.ok) {
      await navigation.navigate('SignInScreen');
    } else {
      Alert.alert(strings.ApiFailure, strings.ApiFailureMessage);
    }
  };

  return (
    <View style={styles.signupcontainer}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.signupheader}>
        <Text style={styles.signuptext_header}>
          {strings.SignInScreenCreateAccount}
        </Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.signupfooter}>
        <ScrollView>
          <Text style={styles.signuptext_footer}>
            {strings.SignInUpScreenPhoneNumber}
          </Text>
          <View style={styles.signupaction}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder={strings.SignInUpScreenPhoneNumber}
              style={styles.signuptextInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.signuptext_footer,
              {
                marginTop: 35,
              },
            ]}>
            {strings.SignInUpScreenPassword}
          </Text>
          <View style={styles.signupaction}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder={strings.SignInUpScreenPassword}
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.signuptextInput}
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

          <Text
            style={[
              styles.signuptext_footer,
              {
                marginTop: 35,
              },
            ]}>
            {strings.SignUpScreenPasswordConfirm}
          </Text>
          <View style={styles.signupaction}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder={strings.SignUpScreenPasswordConfirm}
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.signuptextInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.signuptextPrivate}>
            <Text style={styles.signupcolor_textPrivate}>
              {strings.tempString}
            </Text>
            <Text
              style={[styles.signupcolor_textPrivate, {fontWeight: 'bold'}]}>
              {strings.Policy}
            </Text>
          </View>
          <View style={styles.signupbutton}>
            <TouchableOpacity
              style={styles.signupsignIn}
              onPress={() => {
                createAccount(data.username, data.password);
              }}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signupsignIn}>
                <Text
                  style={[
                    styles.signuptextSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  {strings.SignInUpScreenCreateAccount}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signupsignIn,
                {
                  borderColor: pallets.TopBottomBar,
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.signuptextSign,
                  {
                    color: pallets.TopBottomBar,
                  },
                ]}>
                {strings.SignInUpScreenSignButtonTitle}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;
