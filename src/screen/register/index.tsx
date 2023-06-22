import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native/';
import Pokeball from '../../assets/pokeball.svg';
import style from './style';
import {Input} from '../login/components/Input';
import {Botton} from '../../components/Botton';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {BottonBack} from '../../components/BottonBack';

export const Register = () => {
  const [eMail, setEMail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEMail, setErrorEMail] = useState();
  const [errorPassword, setErrorPassword] = useState();
  const navigation = useNavigation();

  const register = (eMailUser, passwordUser) => {
    auth()
      .createUserWithEmailAndPassword(eMailUser, passwordUser)
      .then(() => {
        navigation.navigate('Tab');
        console.log('Registrado');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setErrorEMail('auth/email-already-in-use');
        }
        if (error.code === 'auth/invalid-email') {
          setErrorEMail('auth/invalid-email');
        }
        if (error.code === 'auth/weak-password') {
          setErrorPassword('auth/weak-password');
        }
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.back}>
        <BottonBack />
      </View>
      <View style={style.container}>
        <Pokeball width={100} height={100} style={style.image} />

        <View style={style.card}>
          <Input title="E-mail" setValue={setEMail} />
          {errorEMail && (
            <Text style={[style.errorEmail, style.error]}>
              {errorEMail === 'auth/email-already-in-use'
                ? 'Este e-mail posee una cuenta activa'
                : 'Este e-mail no es valido'}
            </Text>
          )}
          <Input title="Contraseña" password={true} setValue={setPassword} />
          {errorPassword && (
            <Text style={[style.errorPassword, style.error]}>
              La contraseña debe tener al menos 8 caracteres
            </Text>
          )}
          <Botton
            width="60%"
            marginTop={30}
            title="Registrarme"
            color="white"
            onClick={() => register(eMail, password)}
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
