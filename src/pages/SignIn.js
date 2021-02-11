import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput, Button, Avatar } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';


const SignIn = ({navigation}) => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    
    return (
        <View style={styles.myView}>
            <View style={styles.LogoStyle}>
           <Entypo name="shopping-bag" size={100} color="white" />
            <Text style={styles.title}>Shopping</Text>
            </View>
           
            <TextInput style={styles.TextInput}
                placeholder="Email/Username"
              
                label="Email"
               value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput style={styles.TextInput}
                placeholder="Password"
           
                label="password"
               value={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity>
                    <Text style={{ fontSize: 15, color: "white",marginLeft:200 }}>Forgot Password?</Text>
                </TouchableOpacity>
            <View style={{alignItems:"center",marginVertical:30}}>
                <Button  mode="contained" onPress={() =>
                    
                    navigation.navigate('HomePage')}>
                    SignIn
  </Button>
                <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                    <Text style={{ fontSize: 15, color: "white" }}>Don't have Account?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Avatar.Icon size={54} icon="google" />
                <Avatar.Icon size={54} icon="facebook" />
                <Avatar.Icon size={54} icon="twitter" />
                <Avatar.Icon size={54} icon="instagram" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    myView: {
        flex:1,
        marginTop: 15,
        backgroundColor: "#0A3D62",
    },
    LogoStyle:{
        marginVertical:30,
        alignItems:"center"
    },
    TextInput: {
        width: "90%",
        height: 50,
        margin: 10,
    },
    title: {
        fontSize: 30,
      
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    footer:{ 
        flexDirection: "row", 
        margin: 8,
         justifyContent: "space-between" ,
         padding:10}
})
export default SignIn;