import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput, Button, Avatar } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
const SignUp = ({navigation}) => {
    return (
        <View style={styles.myView}>
            <View style={styles.LogoStyle}>
            <Entypo name="shopping-bag" size={100} color="white" />
            <Text style={styles.title}>Shopping</Text>
            </View>
            <TextInput style={styles.TextInput}
                placeholder="Name"
              
                label="Name"
            //   label="Email"
            //   value={text}
            //   onChangeText={text => setText(text)}
            />
            <TextInput style={styles.TextInput}
                placeholder="Email/Username"
              
                label="Email"
            //   label="Email"
            //   value={text}
            //   onChangeText={text => setText(text)}
            />
            <TextInput style={styles.TextInput}
                placeholder="Password"
           secureTextEntry={true}
                label="password"
            //   label="Email"
            //   value={text}
            //   onChangeText={text => setText(text)}
            />
                <TextInput style={styles.TextInput}
                placeholder="Re Enter Password"
           secureTextEntry={true}
                label="confirm password"
            //   label="Email"
            //   value={text}
            //   onChangeText={text => setText(text)}
            />
            <View style={{alignItems:"center",marginVertical:20}}>
                <Button  mode="contained" onPress={() => navigation.navigate('SignIn')}>
                    SignUp
  </Button>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={{ fontSize: 15, color: "white" }}>already have an account?</Text>
                </TouchableOpacity>
            </View>


      
        </View>
    );
}

const styles = StyleSheet.create({
    myView: {
        flex:1,
        margin: 10,
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
})
export default SignUp;