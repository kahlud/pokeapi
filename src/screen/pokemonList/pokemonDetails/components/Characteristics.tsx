import React from 'react';
import {Image, View} from 'react-native';
import {Detail} from './Detail';
import style from './style';
import {LOGO} from '../../../../constants/logos';
import {COLOR} from '../../../../constants/colors';

interface ICharacteristics {
  weight: number;
  height: number;
  types: any;
}

export const Characteristics = ({weight, height, types}: ICharacteristics) => {
  return (
    <View style={style.containrDetail}>
      <Detail num={weight} text="Peso" />
      <View style={style.divider} />
      <View style={style.containerTypes}>
        {types.map((item, index) => {
          return (
            <View
              key={index}
              style={[
                style.containerType,
                {
                  backgroundColor: COLOR[item.type.name].base,
                },
              ]}>
              <Image source={LOGO[item.type.name]} style={style.typeImage} />
            </View>
          );
        })}
      </View>
      <View style={style.divider} />
      <Detail num={height} text="Altura" />
    </View>
  );
};
