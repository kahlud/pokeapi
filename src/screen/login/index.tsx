import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Input} from './components/Input';
import style from './style';
import {Botton} from '../../components/Botton';
import Pokeball from '../../assets/image 8 (2).svg';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  chekingAuthentication,
  starGoogleSingIn,
} from '../../redux/store/auth/thunksAuth';
import {AppDispatch} from '../../redux/store';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.container}>
        <Pokeball width={100} height={100} style={style.image} />

        <View style={style.card}>
          <Input title="Usuario" setValue={setUser} />
          <Input title="Contraseña" password={true} setValue={setPassword} />
          <View style={style.containerBotton}>
            <Botton
              title="Ingresar"
              onClick={() => {
                dispatch(chekingAuthentication({user, password}));
              }}
              disabled={false}
              color="#ebebeb"
              width="46%"
              colorText="black"
            />

            <Botton
              title="Google"
              onClick={() => dispatch(starGoogleSingIn())}
              disabled={false}
              color="#ebebeb"
              width="46%"
              colorText="black"
            />
          </View>
        </View>
        <Botton
          colorText="white"
          marginTop={25}
          color="#ba0201"
          width="60%"
          onClick={() => {
            navigation.navigate('Register');
          }}
          title="Registrarse"
        />
      </View>
    </SafeAreaView>
  );
};
