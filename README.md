Proyecto final de react native con expo, autenticación de login con firebase y crudde paises.

Creación del proyecto:

-- Crear App con Expo: 
1. expo init proyecto-final
2. cd proyecto-final
3. yarn start

-- Instalar Navigation:
1. yarn add @react-navigation/native@^5.x
2. expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
3. yarn add @react-navigation/stack@^5.x

--Instalar Paper:
1. yarn add react-native-paper

--Instalar Axios:
1. yarn add axios

--Instalar Json Server:
1. json-server --watch db.json

-- Prender json server:
1. json-server --host 192.168.100.4 --port 3000 db.json

--Instalar Firebase
1. yarn add firebase@8.9.1
2. Crear un proyecto en firebase y verificar un suario en authentication.
