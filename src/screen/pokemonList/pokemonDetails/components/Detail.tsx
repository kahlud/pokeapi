import React from 'react';
import {Text, View} from 'react-native';

interface IDetail {
  num?: number;
  text: string;
}

export const Detail = ({num, text}: IDetail) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: '600', fontSize: 18}}>{num}</Text>
      <Text style={{fontSize: 14, fontWeight: '400'}}>{text}</Text>
    </View>
  );
};
