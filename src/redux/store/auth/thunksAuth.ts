import {singInWithGoogle} from '../../../firebase/providers';
import {checkingCredential} from './authSlice';

export const chekingAuthentication = ({email, password}) => {
  return async dispatch => {
    dispatch(checkingCredential({email, password}));
  };
};

export const starGoogleSingIn = () => {
  return async dispatch => {
    dispatch(checkingCredential);
    const result = singInWithGoogle();
  };
};
