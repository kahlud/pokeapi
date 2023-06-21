import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import App from './src';
import {PokemonScreen} from './src/screen/pokemonList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Evolution} from './src/screen/evolution';
import {Favorites} from './src/screen/favorites';
import {DetailsPokemon} from './src/screen/pokemonList/pokemonDetails';
import {EvolutionDetail} from './src/screen/evolution/evolutionDetails';
import {APP_COLORS} from './src/constants/colors';
import {Image} from 'react-native';
import {RootStackParamList} from './src/navigation/utils';
import {Register} from './src/screen/register';

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
        component={Evolution}
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
        component={Favorites}
        options={{
          title: '',
          headerShown: false,
          tabBarItemStyle: {paddingTop: 16},
          tabBarIcon: ({focused, size}) => {
            const imageSize = size * 1.4;
            if (focused) {
              return (
                <Image
                  source={require('./src/assets/estrella.png')}
                  style={{width: imageSize, height: imageSize}}
                />
              );
            } else {
              return (
                <Image
                  source={require('./src/assets/estrellaBW.png')}
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

export default function index() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
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
