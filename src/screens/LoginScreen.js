import React, {useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import CheckBox from '../components/CheckBox';
import Input from '../components/Input';
import {colors, fonts,/* images */} from '../constants';
import DeviceInfo from "react-native-device-info" 
import CustomView from '../components/CustomView';
import ButtonLogin from '../components/Button';
import axios from 'axios';



export default function LoginScreen() {



  const versionNumber = DeviceInfo.getVersion();

  const [email,SetEmail] = useState("")
  const [password,setPassword] = useState("")

  const [rememberMe, setrememberMe] = useState(false);

  const handleRememberMe = () => {
    void setrememberMe(remember => !remember);
  };
  
  return (
    <CustomView style={styles.container}>
    <View style={styles.innerContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/login.png")}
          style={styles.logo1}
          resizeMethod="scale"
          resizeMode="contain"
        />
        <Image
          source={require("../assets/images/login_people.png")}
          style={styles.logo2}
          resizeMethod="scale"
          resizeMode="contain"
        />
      </View>
      <View >
        <Input
       
          onChangeText={(text) => SetEmail(text)}
          icon={'mail-outline'}
          color={colors.light_pink}
          value={email}
          placeHolder={"Emailinizi giriniz."}
          
        />
     
        <Input
          onChangeText={(text) => setPassword(text)}          
          icon={'lock-outline'}
          color={colors.light_blue}
          value={password}
          placeHolder={"Şifrenizi giriniz."}
        
        />
        <View style={styles.rememberMeContainer}>
          <CheckBox
            onChangeState={() => handleRememberMe()}
            checked={rememberMe}
            checkedColor={colors.dim_grey}
          />
          <Text style={styles.rememberMeText}>Beni hatırla.</Text>
          </View>
          <View >
            <ButtonLogin 
              text={"Giriş Yap"}
            
            />
        </View>
      </View>
    </View>
    <View style={styles.versionNumberContainer}>
      <Text style={styles.versionNumberText}>{versionNumber}</Text> 
    </View>
  </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  logo1: {
    marginTop: 25,
    width: 180,
    height: 90,
    alignSelf: 'center',
    tintColor: colors.light_pink,
  },
  logo2: {
    marginBottom: 25,
    width: 100,
    height: 50,
    alignSelf: 'center',
    tintColor: colors.light_blue,
  },
  logoContainer: {marginBottom: 25, alignItems: 'center'},
  rememberMeContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    fontSize: fonts.f12,
    fontWeight: '500',
    color: colors.dim_grey,
    marginLeft:5
  },
  versionNumberText: {
    fontSize: fonts.f12,
    color: colors.black,
  },
  versionNumberContainer:{
    paddingTop:90,
    paddingBottom:10,
    alignItems:"center",
    width:"100%"

  }
});