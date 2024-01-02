import { SafeAreaView, StatusBar, StyleSheet } from "react-native"
import NotaEditor from "./src/componentes/NotaEditor"
import Nota from "./src/componentes/Nota"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState } from "react"
import { FlatList } from "react-native-web";

export default function App() {
  const [notas, setNotas] = useState([]);

  const mostraTodasNotas = async () => {
    const todasAsChaves = await AsyncStorage.getAllKeys();
    const todasAsNotas = await AsyncStorage.multiGet(todasAsChaves);
    setNotas(todasAsNotas);
    console.log(notas)
  }


  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={notas}
        renderItem={nota => <Nota item={nota}/>}
        keyExtractor={nota => nota[0]}
      />
      <NotaEditor mostraTodasNotas={mostraTodasNotas} />
      <StatusBar />
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
})
