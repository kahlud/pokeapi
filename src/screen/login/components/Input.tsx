import React, {useState} from 'react';
import style from '../style';
import {Text, TextInput, View} from 'react-native';

interface IInput {
  title: string;
  password?: boolean;
  setValue: React.Dispatch<React.SetStateAction<undefined>>;
}

export const Input = ({title, password, setValue}: IInput) => {
  const [value, onChangeText] = useState();
  return (
    <View style={style.containerInput}>
      <Text style={style.text}>{title}</Text>
      <TextInput
        onChangeText={text => onChangeText(text)}
        value={value}
        style={style.textInput}
        secureTextEntry={password}
        onChange={() => setValue(value)}
      />
    </View>
  );
};
