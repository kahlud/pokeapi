import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';

export const BottonBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={style.touchableBack}>
      <Image
        source={require('../assets/flecha-izquierda.png')}
        style={style.back}
      />
    </TouchableOpacity>
  );
};
