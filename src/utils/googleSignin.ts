import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  webClientId:
    '548377977938-4vmtrvgg4de1ghk48dit18igqe5qa1bi.apps.googleusercontent.com',
  offlineAccess: true,
  hostedDomain: '',
  forceCodeForRefreshToken: true,
  accountName: '',
  iosClientId:
    '548377977938-9t72o6ir54qcsbk7ncegcum5lomlh1aq.apps.googleusercontent.com',
  googleServicePlistPath: '',
  openIdRealm: '',
  profileImageSize: 120,
});

export const goglesignIn = async () => {
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
};
