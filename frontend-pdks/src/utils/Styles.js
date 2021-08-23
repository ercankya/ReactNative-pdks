import {StyleSheet, Platform} from 'react-native';
import {pallets} from './pallets';
export const styles = StyleSheet.create({
  //About-BookMark-Details
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  splashcontainer: {
    flex: 1,
    backgroundColor: pallets.TopBottomBar,
  },
  splashlogo: {
    width: 400,
    height: 400,
    borderRadius: 125,
  },
  splashfooter: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 30,
    borderRadius: 125,
  },
  splashtitle: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  //DrawerScreen
  containerf: {flex: 1},
  paddingleft: {paddingLeft: 20},
  directionr: {flexDirection: 'row', marginTop: 15},
  directionc: {flexDirection: 'column', marginTop: 15},
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  //HomeScreen
  text_response: {
    textAlign: 'center',
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold',
  },
  onBtn: {
    textAlign: 'center',
    backgroundColor: '#9fb300',
    fontSize: 30,
    margin: 10,
    padding: 10,
    fontWeight: 'bold',
  },
  offBtn: {
    textAlign: 'center',
    backgroundColor: '#e4605e',
    fontSize: 30,
    margin: 10,
    padding: 10,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 400,
    height: 300,
    margin: 5,
  },
  //SignIn
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  footer2: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },

  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  signIn2: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },

  //splashscreen
  splashcontainer: {
    flex: 1,
    backgroundColor: pallets.TopBottomBar,
  },
  splashheader: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashfooter: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 30,
    borderRadius: 125,
  },
  splashlogo: {
    width: 400,
    height: 400,
    borderRadius: 125,
  },
  splashtitle: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  splashtext: {
    color: 'grey',
    marginTop: 5,
  },
  splashbutton: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  splashsignIn: {
    width: 335,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  splashtextSign: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  //signupscreen
  signupcontainer: {
    flex: 1,
    backgroundColor: pallets.TopBottomBar,
  },
  signupheader: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  signupfooter: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  signuptext_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  signuptext_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  signupaction: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  signuptextInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  signupbutton: {
    alignItems: 'center',
    marginTop: 50,
  },
  signupsignIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  signuptextSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  signuptextPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  signupcolor_textPrivate: {
    color: 'grey',
  },
  //signinscreen
  signincontainer: {
    flex: 1,
    backgroundColor: pallets.TopBottomBar,
  },
  signinheader: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  signinfooter: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  signintext_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  signintext_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  signinaction: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  signinactionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  signintextInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  signinerrorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  signinbutton: {
    alignItems: 'center',
    marginTop: 50,
  },
  signinsignIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  signintextSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
