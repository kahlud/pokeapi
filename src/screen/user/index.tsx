import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Botton} from '../../components/Botton';
import auth from '@react-native-firebase/auth';

export const UserScreen = () => {
  const logout = () => {
    auth().signOut();
  };

  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        <TouchableOpacity
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'grey',
            borderRadius: 100,
          }}></TouchableOpacity>
        <Text style={{fontSize: 18, marginVertical: 10}}>Usuario:</Text>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <Botton
          color="#ba0201"
          title="Cerrar sesion"
          colorText="white"
          onClick={() => {
            logout();
          }}
          width="70%"
        />
      </View>
    </SafeAreaView>
  );
};
