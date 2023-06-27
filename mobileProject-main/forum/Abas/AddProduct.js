import { StyleSheet,Text, View,TouchableOpacity, TextInput} from 'react-native';
import * as React from 'react';
import { database } from '../fb';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
 
export default function AddProduct(){
    
    const [ newItem, setNewItem] = React.useState({
        name: '',
        valor: 0,
        isVendido: false,
        createAt: new Date(),
    })
    
    const onSend = async() => {
        await addDoc(collection(database, 'ProjetoFirebase'), newItem)
        navigation.goBack();

    }

    return(
        <View style={styles.container}>
        <Text style={styles.txt}> Add new product</Text>
        <TextInput
            style={styles.input}
            placeholder='Name Product'
            onChangeText={(text) => setNewItem({...newItem, name:text})}
        />
        <TextInput
        style={styles.input}
        placeholder='Valor Product'
        keyboardType='numeric'
        onChangeText={(text) => setNewItem({...newItem, valor:text})}
        />
         <TouchableOpacity style={styles.btn}
            onPress={onSend}>
              <Text style={styles.txtbtn}>Adicionar</Text>
            </TouchableOpacity>       
    </View>
    )
   
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ddd2d2',
      alignItems: "center",
      justifyContent: 'center',
    },
    btn:{
        backgroundColor: "#615856",
        paddingHorizontal: "3%",
        paddingVertical: "1%", 
        borderRadius: 5,
        marginBottom: 5,
        textAlign: 'center',
        width: '20%',
    },
      txtbtn :{
        color: "#ddd2d2",
    },
    input:{
        borderWidth: 1,
        borderRadius: 5, 
        color: "#968e8d" ,
        borderColor: "#615856",
        marginBottom: "1%",
        width: '70%'
      },
});
