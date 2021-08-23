import React from 'react';
import {View} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AuthContext} from '../../components/context';

import {logOut} from '../../utils/Api';
import {styles} from '../../utils/Styles';
import strings from '../../utils/Strings';

export function DrawerContent(props) {
  const [profil, setProfil] = React.useState('Profile');
  const [email, setEmail] = React.useState('@');
  const {signOut} = React.useContext(AuthContext);

  React.useEffect(() => {
    AsyncStorage.getItem('username')
      .then((value) => {
        setProfil(value);
      })
      .done();
    AsyncStorage.getItem('email')
      .then((value) => {
        setEmail(value);
      })
      .done();
  }, [profil]);
  return (
    <View style={styles.containerf}>
      <DrawerContentScrollView {...props}>
        <View style={styles.containerf}>
          <View style={styles.paddingleft}>
            <View style={styles.directionf}>
              <Avatar.Image
                source={require('../../assets/profile.png')}
                size={50}
              />
              <View style={styles.directionc}>
                <Title style={styles.title}>{profil}</Title>
                <Caption style={styles.caption}>{email}</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home" color={color} size={size} />
              )}
              label={strings.DrawerScreenNavigationHome}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label={strings.DrawerScreenNavigationProfile}
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label={strings.DrawerScreenNavigationConfirm}
              onPress={() => {
                props.navigation.navigate('ConfirmScreen');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label={strings.DrawerScreenNavigationExit}
          onPress={() => {
            logOut(profil);
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}
