import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import App from './src';
import {PokemonScreen} from './src/screen/pokemonList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EvolutionScreen} from './src/screen/evolution';
import {FavoritesScreen} from './src/screen/favorites';
import {UserScreen} from './src/screen/user';
import {DetailsPokemon} from './src/screen/pokemonList/pokemonDetails';
import {EvolutionDetail} from './src/screen/evolution/evolutionDetails';
import {APP_COLORS} from './src/constants/colors';
import {Image} from 'react-native';
import {RootStackParamList} from './src/navigation/utils';
import {Register} from './src/screen/register';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

type NavigateStackNavigatorProps = RootStackParamList;

const Stack = createNativeStackNavigator<NavigateStackNavigatorProps>();
const Tab = createBottomTabNavigator();
const PokemonsStack = createNativeStackNavigator<NavigateStackNavigatorProps>();
const PokemonEvolutionStack =
  createNativeStackNavigator<NavigateStackNavigatorProps>();

const PokemonsStackScreen = () => {
  return (
    <PokemonsStack.Navigator>
      <PokemonsStack.Screen
        name="PokemonHome"
        component={PokemonScreen}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <PokemonsStack.Screen
        name="DetailPokemon"
        component={DetailsPokemon}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </PokemonsStack.Navigator>
  );
};

const PokemonsEvolutionStackScreen = () => {
  return (
    <PokemonEvolutionStack.Navigator>
      <PokemonEvolutionStack.Screen
        name="Evolution"
        component={EvolutionScreen}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <PokemonEvolutionStack.Screen
        name="DetailEvolution"
        component={EvolutionDetail}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </PokemonEvolutionStack.Navigator>
  );
};

const TabBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: APP_COLORS.background},
      }}>
      <Tab.Screen
        name="PokemonList"
        component={PokemonsStackScreen}
        options={{
          title: '',
          headerShown: false,
          tabBarItemStyle: {paddingTop: 16},
          tabBarIcon: ({focused, size}) => {
            const imageSize = size * 1.4;
            if (focused) {
              return (
                <Image
                  source={require('./src/assets/pelotaColor.png')}
                  style={{width: imageSize, height: imageSize}}
                />
              );
            } else {
              return (
                <Image
                  source={require('./src/assets/pelota.png')}
                  style={{width: imageSize, height: imageSize}}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Evolution"
        component={PokemonsEvolutionStackScreen}
        options={{
          title: '',
          headerShown: false,
          tabBarItemStyle: {paddingTop: 16},
          tabBarIcon: ({focused, size}) => {
            const imageSize = size * 1.4;
            if (focused) {
              return (
                <Image
                  source={require('./src/assets/huevoColor.png')}
                  style={{width: imageSize, height: imageSize}}
                />
              );
            } else {
              return (
                <Image
                  source={require('./src/assets/huevos.png')}
                  style={{width: imageSize, height: imageSize}}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: '',
          headerShown: false,
          tabBarItemStyle: {paddingTop: 16},
          tabBarIcon: ({focused, size}) => {
            const imageSize = size * 1.5;
            if (focused) {
              return (
                <Image
                  source={require('./src/assets/insigniasColor.png')}
                  style={{width: imageSize, height: imageSize}}
                />
              );
            } else {
              return (
                <Image
                  source={require('./src/assets/insignias.png')}
                  style={{width: imageSize, height: imageSize}}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          title: '',
          headerShown: false,
          tabBarItemStyle: {paddingTop: 16},
          tabBarIcon: ({focused, size}) => {
            const imageSize = size * 1.5;
            if (focused) {
              return (
                <Image
                  source={require('./src/assets/usuarioColor.png')}
                  style={{width: imageSize, height: imageSize}}
                />
              );
            } else {
              return (
                <Image
                  source={require('./src/assets/usuario.png')}
                  style={{width: imageSize, height: imageSize}}
                />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function Index() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);
    return subscriber;
  }, []);

  if (!user) {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={App}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Tab"
            component={TabBottom}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
