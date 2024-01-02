# Curso React Native: guardando informações localmente
Autor: [Alura](https://cursos.alura.com.br/course/react-native-informacoes-localmente)
Adaptação: Iratuã Júnior
______
Primeiramente, instale o [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/install)
```
npm install @react-native-async-storage/async-storage
```

Dica: abra o windows bash e rode o seguinte comando dentro do projeto
```bash 
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```
Isso ajudará a previnir o seguinte [erro](https://cursos.alura.com.br/forum/topico-como-resolvi-o-erro-failed-to-construct-transformer-error-0308010c-digital-envelope-routines-unsupported-258899)

Abra o arquivo src/NotaEditor.js e adicione o import do asyncstorage
```javascript
import AsyncStorage  from "@react-native-async-storage/async-storage";
```

Crie uma função que irá salvar os dados de uma nota
```javascript
 const salvarNota = async() => {
    const umaNota = {
      id:"1",
      texto:texto
    }
    await AsyncStorage.setItem(umaNota.id, umaNota.texto)
  }
```

Adicione o comportamento ao botão 'salvar'
```javascript
    <TouchableOpacity style={estilos.modalBotaoSalvar}
        onPress={salvarNota}>
        <Text style={estilos.modalBotaoTexto}>Salvar</Text>
    </TouchableOpacity>
```

Criando a função que irá ler um dado persistido.
```javascript
 const mostrarNota = async(id) => {
    console.log(await AsyncStorage.getItem(id))
  }
```

E chame-a dentro de salvarNota
```javascritp
  const salvarNota = async() => {
    const umaNota = {
      id:"1",
      texto:texto
    }
    await AsyncStorage.setItem(umaNota.id, umaNota.texto)
    mostrarNota("1")
  }
```
Cadastre uma nova nota e verifique no seu terminal se um LOG com o conteúdo da nota foi exibido.

______

### Gerando ID dinâmico

Crie uma nova função para gerar o ID.
