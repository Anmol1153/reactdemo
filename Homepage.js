import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {}  from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CustomTouchableButtons from './src/customcomponents/CustomTouchableButtons';
const Homepage = ({ navigation ,route}) => {
    const clearvalue = () => { 
        AsyncStorage.clear()
        
        navigation.navigate('App')
        alert('Log Out Successfull')
      }
    
return(

    <View>
        <Text style={{fontWeight: 'bold',alignSelf: 'center',color:'red'}}>
       Welcome: {route?.params?.Email} 
        </Text>

        <CustomTouchableButtons
 buttonTitle='Logout'
 onPress={clearvalue}
/>
</View>
)}
export default Homepage