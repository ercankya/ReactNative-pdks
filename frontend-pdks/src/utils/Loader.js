import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export default function Loader() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator
        size="large"
        color="tomato"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      />
    </View>
  );
}
