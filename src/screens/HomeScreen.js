import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { Card, Title, DataTable, FAB } from 'react-native-paper'
import axios from 'axios'

export default function HomeScreen({ navigation }) {

  const [paises, setPaises] = useState([]);
  const [consultarApi, setConsultarApi] = useState(true);

  useEffect(() => {

    const datosPaisesApi = async () => {
      try {

        const resultado = await axios.get('http://192.168.100.4:3000/paises')
        setPaises(resultado.data)
        setConsultarApi(false)

      } catch (error) {
        console.log(error);
      }
    }
    if (consultarApi) {
      datosPaisesApi();
    }
  }, [consultarApi])

  return (
    <>
      <Card style={styles.container}>
        <Card.Content>
          <Title style={styles.titulo}>PAISES DEL MUNDO</Title>

          <DataTable>
            <DataTable.Row>

              <DataTable.Cell>
                <Title style={styles.tabla}>Nombre</Title>
              </DataTable.Cell>

              <DataTable.Cell>
                <Title style={styles.tabla}>Capital</Title>
              </DataTable.Cell>

              <DataTable.Cell>
                <Title style={styles.tabla}>Continente</Title>
              </DataTable.Cell>  

            </DataTable.Row>

            <FlatList style={styles.contenido}
              data={paises}
              renderItem={({ item }) => (
                <DataTable.Row
                  onPress={() => navigation.navigate("Detalles", { item, setConsultarApi })}>

                  <DataTable.Cell>
                    <Title style={styles.itemTabla}>{item.nombre}</Title>
                  </DataTable.Cell>

                  <DataTable.Cell>
                    <Title style={styles.itemTabla}>{item.capital}</Title>
                  </DataTable.Cell>

                  <DataTable.Cell>
                    <Title style={styles.itemTabla}>{item.continente}</Title>
                  </DataTable.Cell>

                </DataTable.Row>
              )}
              keyExtractor={pais => (pais.id)}
            />
          </DataTable>

        </Card.Content>
      </Card>

      <FAB
        style={styles.fab}
        large
        icon="plus"
        label='Nuevo Pais'
        onPress={() => navigation.navigate('Nuevo', { setConsultarApi })}
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

  itemTabla: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500'
  },

  icono: {
    backgroundColor: '#148F77'
  },

  fab: {
    position: 'absolute',
    margin: 20,
    right: 5,
    bottom: 10,
    backgroundColor: '#2E86C1'
  },

  contenido: {
    marginBottom: 290
  },

  tabla: {
    fontSize: 17,
    color: '#1F618D',
    fontWeight: '700'
  }
})