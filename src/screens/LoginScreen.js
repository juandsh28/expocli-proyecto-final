import React, { useState } from 'react'
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import { BlurView } from 'expo-blur'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../utils/Firebase'
import { useNavigation } from '@react-navigation/native'


const uri = 'https://cdn.pixabay.com/photo/2021/08/07/14/36/stripes-6528728_960_720.png'
const profilePicture = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert('! Cuenta creada con éxito !');
        const user = userCredential.user;
        console.log(user);
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Error al crear la cuenta.');
      })
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Bienvenido!')
        Alert.alert('! Bienvenido !');
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Error al iniciar sesión.');
      })
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />

      <ScrollView
        contentContainerStyle={{
          flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center',
        }}>

        <BlurView>
          <View style={styles.login}>
            <Image source={{ uri: profilePicture }} style={styles.profilePicture} />

            <View>
              <Text style={styles.text}>Correo Electrónico</Text>
              <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Ingrese su Correo" />
            </View>

            <View>
              <Text style={styles.text}>Contraseña</Text>
              <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="Ingrese su Contraseña" secureTextEntry={true} />
            </View>

            <TouchableOpacity onPress={handleSignIn} style={[styles.button, { backgroundColor: '#5499C7' }]}>
              <Text style={styles.text}>Ingresar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCreateAccount} style={[styles.button, { backgroundColor: '#45B39D' }]}>
              <Text style={styles.text}>Crear Cuenta</Text>
            </TouchableOpacity>

          </View>
        </BlurView>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },

  login: {
    width: 330,
    height: 510,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#808B96'
  },

  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
    marginVertical: 20
  },

  input: {
    width: 250,
    height: 45,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#EAECEE',
    marginBottom: 20,
    fontSize: 17
  },

  button: {
    width: 250,
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1
  },

  text: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    fontWeight: '500'
  }
})