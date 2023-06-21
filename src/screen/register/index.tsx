import React from 'react';
import {SafeAreaView, View} from 'react-native/';
import Pokeball from '../../assets/image 8 (2).svg';
import style from './style';
import {Input} from '../login/components/Input';
import {Botton} from '../../components/Botton';

export const Register = () => {
  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.container}>
        <Pokeball width={100} height={100} style={style.image} />

        <View style={style.card}>
          <Input title="E-mail" />
          <Input title="Usuario" />
          <Input title="Contraseña" />
          <Botton
            width="60%"
            marginTop={30}
            title="Registrarme"
            color="white"
            onClick={() => {}}
          />
        </View>
        <Botton
          title="Registrarme con google"
          color="#ba0201"
          colorText="white"
          width="75%"
          marginTop={25}
          onClick={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};
