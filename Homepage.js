import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {}  from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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
<TouchableOpacity  style={{ backgroundColor: 'black', width: '50%', alignSelf: 'center' ,justifyContent:'center'}}
onPress={clearvalue}
>

    <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 20, color: 'white'}}>
        Logout
    </Text>
</TouchableOpacity>
</View>
)}
export default Homepage