import React, { useState, useEffect } from 'react';
import { random, commerce } from 'faker';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {
    StyleSheet, Text, TouchableOpacity,
    View, Image,
    ScrollView,
    TextInput, Platform
} from 'react-native';
//import components
import Header from '../components/Header';
const ProductList=({ navigation,route })=>  {
const title=route.params.title
    const [cardData, setCardData] = useState([])
    const fetchImage = () => {
        fetch(`https://api.unsplash.com/search/photos?client_id=SR3PuDaEbJV6epzzhoqZUEdC3fn6r5nZHEmywmuzvOc&query=${title}&orientation=landscape&per_page=6`)
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
            <Header Title="Product List" />
            <View >
                <View style={styles.imageGallery} >
                    {
                        cardData.map(item => {
                            return (
                                <View  key={item.id}>
                                    <View >
                                        <Card style={styles.myView}>
                                            <Card.Content>
                                                <Title>{commerce.product()}</Title>
                                                <Paragraph>{item.alt_description}</Paragraph>
                                            </Card.Content>
                                            <Card.Cover  source={{ uri: item.urls.small }} />
                                            <Card.Actions style={{justifyContent:"space-evenly"}}>
                                                <Button 
                                                style={{backgroundColor:"#00aaff"}}
                                                icon="information" mode="contained" 
                                                onPress={() =>navigation.navigate('ProductDetail',
                                                {ImageUrl:item.urls.small,
                                                productDesc:item.alt_description,
                                                productName:commerce.product(),
                                                productPrice:commerce.price(),
                                                })
                                                }>
                                                    More Detail </Button>
                                                    <Title> RS:-{commerce.price()}</Title>
                                            </Card.Actions>
                                        </Card>
                                    </View>
                                </View>

                            )
                        })
                    }
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
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    myView: {
        backgroundColor: "powderblue",
        marginBottom:5,
        padding:5
    }
})


export default ProductList;