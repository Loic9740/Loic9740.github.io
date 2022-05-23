import * as React from 'react';
import { TextInput,Button, View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AssetExample from './components/AssetExample';

function HomeScreen({ navigation }) {
  return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'   }}>
      <AssetExample/>
      <Text style={styles.text}>SNAPCHAT</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <AssetExample/>
      <Text style={styles.text}>Register Form</Text>
      <TextInput
          value='Username'
          placeholder={'Username'}
          style={styles.input}
        />
         <TextInput
          value='Password'
          placeholder={'Password'}
          style={styles.input}
        />
      
      <Button title="Go back" onPress={() => navigation.goBack()} />
      
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <AssetExample/>
      <Text style={styles.text}>Login Form</Text>
       <TextInput
          value='Username'
          placeholder={'Username'}
          style={styles.input}
        />
         <TextInput
          value='Password'
          placeholder={'Password'}
          style={styles.input}
        />
      
      
      <Button title="Go back" onPress={() => navigation.goBack()} />
      
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen style={styles.input} name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    
  },
  text:{
    fontSize:35,
    
    fontStyle:"bold",
  },
  input: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#fc00d8",
  },
});
