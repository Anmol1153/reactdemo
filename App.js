
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Alert,Text,TouchableOpacity, View } from 'react-native';
import CustomInputs from './src/customcomponents/CustomInputs';

const App = ({ navigation }) => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpass] = useState("")
  const validation=()=>{
      if (name == '') {
      Alert.alert('Enter name')
    }
    else if(email == '') {
      Alert.alert('Enter Email')
    }
    else if (password == '') {
      Alert.alert('Enter Password')
    }
    else{
      AsyncStorage.setItem('Name', name)
      AsyncStorage.setItem('Email', email)
      AsyncStorage.setItem('Password', password)
      navigation.navigate('formdemo')
      alert('data saved successfully')
    }
  }
  

  return (


    <View style={{ alignSelf: 'center', justifyContent: 'center', padding: 20, width: '100%', height: '100%', borderColor: 'black', backgroundColor: 'gray' }}>
      {

      /* {
        vis ? (

          <View style={{ width: '115%', height: '130%', zIndex: 1, justifyContent: 'center', j0ustifyContent: 'center', position: 'absolute', backgroundColor: 'white' }}>




            <Text style={{alignSelf: 'center'}}>Name:{name}</Text>
            <Text style={{alignSelf: 'center'}}>Email:{name}</Text>
            <Text style={{alignSelf: 'center'}}>Password:{name}</Text>

            <Button 
             title='Back'

             onPress={() => { setVis(false) }}
             >
               
            </Button>
            
            




          </View>




        ) : null
//  */}


      {/* <Text style={{fontWeight: '500',fontSize: 20, color: 'white',margin: 20,alignItems: 'center',justifyCozntent: 'center'}}>
  NAME: */}
      {/* <Image style={{width: '113%',height: '50%' ,margin: 10}} source={require('../reactdemo/images/login.png')} /> */}
<CustomInputs
placeholder='Enter Name'
value={name}
placeholderTextColor='grey'
backgroundColor='white'
onChangeText={(text)=>{
  setname(text)
}}
/>
<CustomInputs
placeholder='Enter Email'
value={email}
placeholderTextColor='grey'
backgroundColor='white'
onChangeText={(text)=>{
  setemail(text)
}}
/>
     
<CustomInputs
placeholder='Enter Password'
value={password}
placeholderTextColor='grey'

backgroundColor='white'
onChangeText={(text)=>{
  setpass(text)
}}
/>

      <TouchableOpacity style={{ backgroundColor: 'black', width: '50%', alignSelf: 'center', margin: 20 }}

onPress={validation}
      

      >

        <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 25, color: 'white'}}
        >
          SignUp</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={{ backgroundColor: 'black', width: '50%', alignSelf: 'center', margin: 20 }}

        onPress={getvalue}

      //       onPress={() => navigation.navigate('formdemo',{,Email: email,Password: password})}
      >

        <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 20, color: 'white' }}
        >
          Show</Text>
      </TouchableOpacity> */}
      {/* <TouchableOpacity style={{ backgroundColor: 'black', width: '50%', alignSelf: 'center', margin: 20 }}

        onPress={clearvalue}

      //       onPress={() => navigation.navigate('formdemo',{Name: name,Email: email,Password: password})}
      >

        <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 20, color: 'white' }}
        >
          Show</Text>
      </TouchableOpacity> */}








    </View>

  )

}


export default App


