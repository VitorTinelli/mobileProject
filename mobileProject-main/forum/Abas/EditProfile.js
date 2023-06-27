
import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput } from 'react-native';



export default function EditProfile({navigation}) {

  return (
    <View style={styles.v1}>
        <View style={styles.botoes}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Botoes_pra_ir')}>
                <Image
                    style={styles.backicon}
                    source={require("../assets/backicon.png")}>
                </Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backicon}>
                <Image
                    style={styles.avatar}
                    source={require("../assets/avatar.png")}>
                </Image>
            </TouchableOpacity>
    </View>
    <View style={styles.v2}> 
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditPhoto')}>
                <Image
                    style={styles.mid_avatar}
                    source={require("../assets/avatar.png")}>
                </Image>
            </TouchableOpacity>
            <Text style={styles.txt_alterar} > Clique na imagem para alterar </Text>
    </View>
    
    <View style={styles.infos}> 
        <Text> Nome: Marco da Silva</Text>
        <Text> CPF: 121.720.912-23 </Text>
        <Text> E-mail: marcodasilva@gmail.com</Text>
        <Text> Celular: 48 93608-5740</Text>
    </View>
    <View style={styles.edit_button}> 
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditPhoto')}>
                <Text> Editar</Text>
            </TouchableOpacity>
    </View>
    <View> 
      <Text> ⠀⠀⠀⠀⠀⠀</Text>
      <Text> ⠀⠀⠀⠀⠀⠀</Text>
      <Text> ⠀⠀⠀⠀⠀⠀</Text>
      <Text> ⠀⠀⠀⠀⠀⠀</Text>
      <Text> ⠀⠀⠀⠀⠀⠀</Text>
      <Text> ⠀⠀⠀⠀⠀⠀</Text>
      <Text> ⠀⠀⠀⠀⠀⠀</Text>
      <Text> ⠀⠀⠀⠀⠀⠀</Text>
      <Text> ⠀⠀⠀⠀⠀⠀</Text>
      <Text> ⠀⠀⠀⠀⠀⠀</Text>
      <Text> ⠀⠀⠀⠀⠀⠀</Text>
      <Text> ⠀⠀⠀⠀⠀⠀</Text>
    </View>
    

    <View> 
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Botoes_pra_ir')}>
                <Image
                    style={styles.logout}
                    source={require("../assets/logout_icon.png")}>
                </Image>
            </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    edit_button: {
      alignSelf: 'center',
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      marginBottom: 15,
      marginTop: 15,
      marginLeft: 15,
      marginRight: 15,
      borderRadius: 10,
      padding: 3,
    },
    logout: {
      width: 64,
      height: 64,
      alignSelf: 'center',
      paddingTop: 50,
    },

    infos: {
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        marginBottom: 15,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        alignSelf: 'center',
        padding: 10,
    },
    txt_alterar: {
        alignSelf: 'center',
        fontSize: 25,
        paddingBottom: 15,
        paddingTop: 12,
    },
  mid_avatar: {
    alignSelf: 'center',
    width: 192,
    height: 192,
    marginTop: 15,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 35,

  },
  v1: {
    flex: 1,
    backgroundColor: '#a0a0a0',

  },
  avatar: {
    width: 64,
    height: 64,
    
  },
  backicon: {
    width: 80,
    height: 80,
  },
  
 
}
);