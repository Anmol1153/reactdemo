import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CustomInputs from './src/customcomponents/CustomInputs';
import CustomTouchableButtons from './src/customcomponents/CustomTouchableButtons';
const formdemo= ({navigation}) =>{
 
  const [email1, setemail] = useState("")
  const [password1, setpass] = useState("")
    const getvalue=()=>{
        AsyncStorage.getItem('Name')
        .then((name)=> {
          if(name!=null){
     AsyncStorage.getItem('Email')
        .then((email)=> {
          if(email!=null){
    
     AsyncStorage.getItem('Password')
        .then((password)=> {
          if(password!=null){
    if(email1 == email || password1==password){
      alert('Login Successfull')
      navigation.navigate('Homepage',{Email: email})
    }
    else{
      alert('Login UnSuccessfull')
    }
    
          }
        })
          }
        })

          }
        })
       
       
        }
    return(
              <View style={{ alignSelf: 'center', justifyContent: 'center', padding: 20, width: '100%', height: '100%', borderColor: 'black', backgroundColor: 'gray' }}>
<CustomInputs
placeholder='Enter Email'
value={email1}
placeholderTextColor='grey'
backgroundColor='white'
onChangeText={(text)=>{
  setemail(text)
}}
/>
<CustomInputs
placeholder='Enter Password'
value={password1}
placeholderTextColor='grey'
backgroundColor='white'
onChangeText={(text)=>{
  setpass(text)
}}
/>
     
<CustomTouchableButtons
 buttonTitle='Login'
 onPress={getvalue}

/>
</View>     



              
             
               
              
     
        
    
    )

}
export default formdemo