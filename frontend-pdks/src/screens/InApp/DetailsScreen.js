import React from 'react';
import {Button, Text, View} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

import {styles} from '../../utils/Styles';
export default function Details({route, navigation}) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Open drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Button
        title="Toggle drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
}
