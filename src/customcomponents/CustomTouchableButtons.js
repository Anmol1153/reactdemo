import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {  } from 'react';
import { Text, TouchableOpacity } from 'react-native';
const CustomTouchableButtons=(props1)=>{
   
return(

    <TouchableOpacity style={[{ backgroundColor: 'black', width: '50%', alignSelf: 'center', margin: 20 },props1.style]}

    onPress={props1.onPress}
          
      >
        <Text style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 25, color: 'white'}}
        >{props1.buttonTitle}
        </Text>
      </TouchableOpacity>

)
}
export default CustomTouchableButtons
