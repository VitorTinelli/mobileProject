import { useState, useEffect } from 'react';
import {  AntDesign  } from '@expo/vector-icons'; 
import { database } from '../fb';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { QuerySnapshot } from 'firebase/firestore';
import Product from './Product.js';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, Image, TouchableOpacity, TextInput, Alert, SafeAreaView, View, Keyboard} from 'react-native';



export default function Home(){

    const [products, setProducts] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
      const collectionRef = collection(database, 'ProjetoFirebase');
      const q = query(collectionRef, orderBy('createAt', 'desc'))
      

      const unsuscribe = onSnapshot(q, QuerySnapshot => {
        setProducts (
          QuerySnapshot.docs.map(doc => ({ 
            id: doc.id,
            name: doc.data().name,
            valor: doc.data().valor,
            isVendido: doc.data().isVendido,
            createAt: doc.data().createAt,
          })
        )
        )})
        //console.log(products);
        //console.log(collectionRef);
        //console.log(unsuscribe);
      return unsuscribe;
      
    }, [])
      
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Produtos</Text>
        <Text>   </Text>
        {products.map((product) => <Product key={product.id} {...product}/> )}
        <View style={styles.row}>
          <Text style={styles.txtx}>Add</Text>
          <Text>  </Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddNews')}>
            <AntDesign name="addfile" size={40} color="black" />       
          </TouchableOpacity>
        </View>
      </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ddd2d2',
      alignItems: "center",
      justifyContent: 'center',
      
    },
    row:{
      flexDirection: 'row', 
    },
    txt:{
      fontSize: 30,
      color: "#615856",
      fontStyle: "italic",
      fontWeight: "bold",
    }, 
    txtx:{
      fontSize: 32,
      
  },
    img:{
      width: 200,
      height: 200,
      marginBottom: "1%",
      marginTop: "2%",
    },
    btn:{
      backgroundColor: "#615856",
      paddingHorizontal: "3%",
      paddingVertical: "1%", 
      borderRadius: 5,
    },
    txtbtn :{
      color: "#ddd2d2",
      fontFamily: "Tahoma", 
    },
    txtInput:{
      borderWidth: 1,
      borderRadius: 5, 
      color: "#968e8d" ,
      borderColor: "#615856",
      marginBottom: "1%",
      width: '70%'
    },
    icon:{
      position:'absolute',
      right: 60,
      marginBottom: 20,
    }
  });
