import React,{useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { IconButton, Colors,ProgressBar } from 'react-native-paper';

export default function Splash({navigation}) {
    useEffect(() => {
       setTimeout(()=>{navigation.navigate('SignIn')},2000);
        
    }, [])
    return (
        <View style={styles.container}>
        <View style={styles.iconstyle}>
        <IconButton
    icon="shopping"
    color="#192A56"
    size={200}
  />
        </View>
        <View style={styles.titlestyle}>
          <Text style={{ color: "#192A56", fontSize: 50, fontWeight: "bold" }}>E-Shop</Text>
          <ProgressBar progress={0.8} color="#192A56" />

        </View>


      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "dodgerblue",
      justifyContent: "center",
      alignItems: "center",
    },
    iconstyle: {
      flex: 0.8,
      justifyContent:"center"
    },
  });