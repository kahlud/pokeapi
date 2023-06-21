import React from 'react';
import {Image, Text, View} from 'react-native';
import {COLOR} from '../constants/colors';
import {LOGO} from '../constants/logos';
import style from './style';

interface IType {
  types: [];
  sizeImage: number;
  width: string;
  fontSize: number;
}

export const Types = ({types, sizeImage, width, fontSize}: IType) => {
  return (
    <View style={style.containerTypeList}>
      {types.map((item, index) => {
        return (
          <View
            key={index}
            style={[
              {backgroundColor: COLOR[item.type.name].color, width},
              style.containerType,
            ]}>
            <Image
              source={LOGO[item.type.name]}
              style={{width: sizeImage, height: sizeImage}}
            />
            <Text style={[{fontSize: fontSize}, style.typeName]}>
              {item.type.name}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
