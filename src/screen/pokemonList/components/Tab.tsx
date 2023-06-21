import React, {useState} from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {LOGO} from '../../../constants/logos';
import {APP_COLORS, COLOR} from '../../../constants/colors';
import style from './style';

export const Tab = () => {
  const [type, setType] = useState();
  const types = Object.keys(LOGO);
  return (
    <ScrollView
      horizontal={true}
      style={[style.ContainerTab, {backgroundColor: APP_COLORS.background}]}>
      {types.map(item => {
        return (
          <TouchableOpacity
            key={item}
            onPress={() => {
              setType(item);
            }}
            style={[
              style.touchableType,
              {
                backgroundColor: COLOR[item].base,
                borderColor:
                  type === item ? COLOR[item].color : COLOR[item].base,
              },
            ]}>
            <Image source={LOGO[item]} style={{width: 24, height: 24}} />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
