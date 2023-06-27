import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Input} from './components/Input';
import style from './style';
import {Botton} from '../../components/Botton';
import Pokeball from '../../assets/pokeball.svg';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {goglesignIn} from '../../utils/googleSignin';

// import {useDispatch} from 'react-redux';
// import {AppDispatch} from '../../redux/store';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [errorUser, setErrorUser] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const [nameUser, setNameUser] = useState('');
  const [password, setPassword] = useState('');

  const login = (userName, passwordUser) => {
    console.log('userName, passwordUser: ', userName, passwordUser);
    auth()
      .signInWithEmailAndPassword(userName, passwordUser)
      .then(() => {
        navigation.navigate('Tab');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          setErrorUser(true);
        }
        if (error.code === 'auth/wrong-password') {
          setErrorPassword(true);
        }
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.container}>
        <Pokeball width={100} height={100} style={style.image} />

        <View style={style.card}>
          <Input title="Usuario" setValue={setNameUser} />
          {errorUser && (
            <Text style={[style.errorUser, style.error]}>
              El usuario no se encuentra registrado
            </Text>
          )}
          <Input title="Contraseña" password={true} setValue={setPassword} />
          {errorPassword && (
            <Text style={[style.errorPassword, style.error]}>
              La contraseña es incorrecta
            </Text>
          )}
          <View style={style.containerBotton}>
            <Botton
              title="Ingresar"
              onClick={() => {
                login(nameUser, password);
              }}
              disabled={false}
              color="#ebebeb"
              width="46%"
              colorText="black"
            />

            <Botton
              title="Google"
              onClick={() => {
                goglesignIn();
              }}
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
