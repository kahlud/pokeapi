import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './style';
interface BottonI {
  title: string;
  color: string;
  disabled?: any;
  onClick: () => void;
  width: string;
  marginTop?: number;
  marginBottom?: number;
  colorText?: string;
}

export const Botton = ({
  title,
  color,
  disabled,
  onClick,
  width,
  marginTop,
  marginBottom,
  colorText,
}: BottonI) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      disabled={disabled}
      style={[
        {backgroundColor: color, width: width, marginTop, marginBottom},
        style.containerBotton,
      ]}>
      <Text style={[style.text, {color: colorText}]}>{title}</Text>
    </TouchableOpacity>
  );
};
