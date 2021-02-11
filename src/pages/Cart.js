import React, { useState, useEffect } from 'react';
import { random, commerce } from 'faker';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import {
    StyleSheet, 
    View,
    ScrollView
} from 'react-native';
//import components
import Header from '../components/Header';
const Cart=({ navigation })=> {
    const [cardData, setCardData] = useState([])

    const removeItem = item => {
        setCardData(cardData.filter(singleItem => singleItem.id !== item.id));
    alert("Item Deleted Successfully");
      };

    const fetchImage = () => {
        fetch(`https://api.unsplash.com/search/photos?client_id=SR3PuDaEbJV6epzzhoqZUEdC3fn6r5nZHEmywmuzvOc&query=cloth&orientation=landscape&per_page=3`)
            .then(res => res.json())
            .then(data => {
                setCardData(data.results)
            })
    }
    useEffect(() => {
        fetchImage()
    }, [])



    return (
        <ScrollView style={styles.container}>
            <Header Title="Cart" />
            <View >
                <View  >
                    {
                        cardData.map(item => {
                            return (
                                <View key={item.id} style={styles.myCart}>
                                    <View style={{width:"50%"}}>
                                        <Card.Cover style={styles.imageGallery} source={{ uri: item.urls.small }} />
                                    </View>
                                    <View style={{width:"50%"}}>
                                        <Card.Content>
                                            <Title>{commerce.product()}</Title>
                                            <Paragraph>{item.alt_description}</Paragraph>
                                            <Title> RS:-{commerce.price()}</Title>
                                            <Button
                                                style={{ backgroundColor: "red" }}
                                                icon="cart-remove" mode="contained" 
                                                onPress={() => removeItem(item)}>
                                                Remove </Button>
                                        </Card.Content>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
                <View>
                    <Card>
                    <Title>Total Amount</Title>
                    <Title> RS:-{commerce.price()*10}</Title>
                    <Button
                     style={{ backgroundColor: "orange" }}
                     icon="cart" mode="contained" onPress={() =>navigation.navigate('Checkout')}>
                         Buy Now </Button>  
                    </Card>
                    

              
                </View>
            </View>
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:15
    },
    imageGallery: {
       height:140,
       padding:5,
       width:"100%"
    },
    myView: {
        backgroundColor: "powderblue",
        margin: 5,
    },
    myCart: {
        flexDirection: "row",
        backgroundColor:"#fff",
        elevation:6,
        marginBottom:2,
        height:150
    }
})


export default Cart;