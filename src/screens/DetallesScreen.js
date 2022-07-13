import React from 'react'
import { StyleSheet, Alert } from 'react-native'
import { Text, Card, Title, FAB, DataTable } from 'react-native-paper'
import axios from 'axios'

export const DetallesScreen = ({ navigation, route }) => {

  const { setConsultarApi } = route.params;
  const { nombre, capital, habitantes, continente, moneda, idioma, gentilicio, prefijo, id } = route.params.item;

  const mostrarConfirmacion = () => {
    Alert.alert(
      "¿Deseas eliminar la información de este pais?",
      "Se eliminará de la lista.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => eliminarPais() }
      ]
    );
  };

  const eliminarPais = async () => {
    const url = `http://192.168.100.4:3000/paises/${id}`;
    try {
      await axios.delete(url)
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("Home");
    setConsultarApi(true);
  }

  return (
    <>
      <Card style={styles.container}>
        <Card.Content>
          <Title style={styles.titulo}>{nombre}</Title>

          <DataTable>
            <DataTable.Row>
              <DataTable.Cell><Text style={styles.nombre}>Capital:</Text></DataTable.Cell>
              <DataTable.Cell><Text style={styles.dato}>{capital}</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={styles.nombre}>Habitantes:</Text></DataTable.Cell>
              <DataTable.Cell><Text style={styles.dato}>{habitantes}</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={styles.nombre}>Continente:</Text></DataTable.Cell>
              <DataTable.Cell><Text style={styles.dato}>{continente}</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={styles.nombre}>Moneda:</Text></DataTable.Cell>
              <DataTable.Cell><Text style={styles.dato}>{moneda}</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={styles.nombre}>Idioma:</Text></DataTable.Cell>
              <DataTable.Cell><Text style={styles.dato}>{idioma}</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={styles.nombre}>Gentilicio:</Text></DataTable.Cell>
              <DataTable.Cell><Text style={styles.dato}>{gentilicio}</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell><Text style={styles.nombre}>Prefijo:</Text></DataTable.Cell>
              <DataTable.Cell><Text style={styles.dato}>{prefijo}</Text></DataTable.Cell>
            </DataTable.Row>
          </DataTable>

        </Card.Content>
      </Card>

      <FAB
        style={styles.fab}
        large
        icon="pencil"
        label='Editar País'
        onPress={() => navigation.navigate('Nuevo', { paises: route.params.item, setConsultarApi })}
      />

      <FAB
        style={styles.fab2}
        large
        icon="delete"
        label='Eliminar'
        onPress={() => mostrarConfirmacion()}
      />

    </>
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

  nombre: {
    marginBottom: 6,
    fontSize: 17,
    fontWeight: '600',
    color: '#1F618D'
  },

  dato: {
    color: '#000',
    fontSize: 17,
    marginBottom: 18
  },

  fab: {
    position: 'absolute',
    margin: 20,
    right: 5,
    bottom: 85,
    backgroundColor: '#17A589'
  },
  fab2: {
    position: 'absolute',
    margin: 20,
    right: 5,
    bottom: 20,
    backgroundColor: '#C0392B'
  }
})