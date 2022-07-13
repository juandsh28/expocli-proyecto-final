import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Card, Title, Button } from 'react-native-paper'
import axios from 'axios'

export default function NuevaScreen({ navigation, route }) {

  const { setConsultarApi } = route.params;
  const [nombre, setNombre] = useState('');
  const [capital, setCapital] = useState('');
  const [habitantes, setHabitantes] = useState('');
  const [continente, setContinente] = useState('');
  const [moneda, setMoneda] = useState('');
  const [idioma, setIdioma] = useState('');
  const [gentilicio, setGentilicio] = useState('');
  const [prefijo, setPrefijo] = useState('');

  useEffect(() => {
    if (route.params.paises) {
      const { nombre, capital, habitantes, continente, moneda, idioma, gentilicio, prefijo } = route.params.paises;
      setNombre(nombre)
      setCapital(capital)
      setHabitantes(habitantes)
      setContinente(continente)
      setMoneda(moneda)
      setIdioma(idioma)
      setGentilicio(gentilicio)
      setPrefijo(prefijo)
    }
  }, [])

  const guardarPais = async () => {
    if (nombre === '' || capital === '' || habitantes === '' || continente === '' || moneda === '' || idioma === '' || gentilicio === '' || prefijo === '') {
      return;
    }
    const paises = { nombre, capital, habitantes, continente, moneda, idioma, gentilicio, prefijo };

    if (route.params.paises) {
      const { id } = route.params.paises;
      paises.id = id;
      const url = `http://192.168.100.4:3000/paises/${id}`;

      try {
        await axios.put(url, paises)
      } catch (error) {
        console.log(error);
      }

    } else {

      try {
        const datos = await axios.post('http://192.168.100.4:3000/paises', paises)
      } catch (error) {
        console.log(error);
      }

    }
    navigation.navigate("Home");
    setNombre('');
    setCapital('');
    setHabitantes('');
    setContinente('');
    setMoneda('');
    setIdioma('');
    setGentilicio('');
    setPrefijo('');
    setConsultarApi(true);
  }

  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title style={styles.titulo}>DATOS DEL PAÍS</Title>

        <View style={styles.caja}>
          <TextInput style={styles.input} placeholder='Nombre' keyboardType='default'
            onChangeText={(texto) => setNombre(texto)} value={nombre} />
        </View>

        <View style={styles.caja}>
          <TextInput style={styles.input} placeholder='Capital' keyboardType='default'
            onChangeText={(texto) => setCapital(texto)} value={capital} />
        </View>

        <View style={styles.caja}>
          <TextInput style={styles.input} placeholder='Habitantes' keyboardType='default'
            onChangeText={(texto) => setHabitantes(texto)} value={habitantes} />
        </View>

        <View style={styles.caja}>
          <TextInput style={styles.input} placeholder='Continente' keyboardType='default'
            onChangeText={(texto) => setContinente(texto)} value={continente} />
        </View>

        <View style={styles.caja}>
          <TextInput style={styles.input} placeholder='Moneda' keyboardType='default'
            onChangeText={(texto) => setMoneda(texto)} value={moneda} />
        </View>

        <View style={styles.caja}>
          <TextInput style={styles.input} placeholder='Idioma' keyboardType='default'
            onChangeText={(texto) => setIdioma(texto)} value={idioma} />
        </View>

        <View style={styles.caja}>
          <TextInput style={styles.input} placeholder='Gentilicio' keyboardType='default'
            onChangeText={(texto) => setGentilicio(texto)} value={gentilicio} />
        </View>

        <View style={styles.caja}>
          <TextInput style={styles.input} placeholder='Prefijo' keyboardType='default'
            onChangeText={(texto) => setPrefijo(texto)} value={prefijo} />
        </View>

        <Button
          style={styles.boton}
          icon="folder" mode="contained" onPress={() => guardarPais()}>
          <Text style={styles.textoBoton}>Guardar País</Text>
        </Button>

      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAECEE'
  },

  titulo: {
    textAlign: 'center',
    fontWeight: '800',
    marginTop: 5,
    marginBottom: 10,
    color: '#1F618D',
    textTransform: 'uppercase'
  },

  caja: {
    marginLeft: 5,
    marginRight: 5
  },

  input: {
    marginBottom: 15,
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#1F618D',
    fontSize: 16,
    paddingLeft: 5,
    borderRadius: 5
  },

  boton: {
    marginTop: 15,
    backgroundColor: '#2E86C1',
    marginLeft: 75,
    marginRight: 75,
    padding: 8,
    borderRadius: 20
  },

  textoBoton: {
    fontSize: 17,
    fontWeight: '700',
    color: '#fff'
  }
})