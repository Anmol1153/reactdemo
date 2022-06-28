import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {  } from 'react';
import { TextInput } from 'react-native';
const CustomInputs=(props)=>{
   
return(
<TextInput style={[{ borderWidth: 2, height: 40, margin: 20, borderColor: 'black', borderRadius: 10 },props.style]}
    value={props.value}
    backgroundColor={props.backgroundColor}
    placeholder={props.placeholder}
    onChangeText={props.onchangeText}
    
   />

)
}
export default CustomInputs
