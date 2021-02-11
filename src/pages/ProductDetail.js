import React from 'react';
import { View, ScrollView, Text ,StyleSheet} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, List } from 'react-native-paper';
import { random, commerce } from 'faker';
import { Rating, AirbnbRating } from 'react-native-ratings';

import Header from '../components/Header';

const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating)
}

const ProductDetail = ({navigation,route}) => {
    const url=route.params.ImageUrl
    const Desc=route.params.productDesc
    const Name=route.params.productName
    const price=route.params.productPrice
    return (
        <ScrollView style={styles.myScrollView} >
            <Header Title="Product Details" />
            <Card style={styles.myCard}>
                <Card.Content>
                    <Title>{Name}</Title>
                </Card.Content>
                <Card.Cover style={{ marginHorizontal: 15 }} 
                source={{ uri:url }} />
                <Card.Actions>
                    <Title> RS:-{price}</Title>
                </Card.Actions>
                <Card.Actions>
                    <Paragraph>{Desc}</Paragraph>
                </Card.Actions>
                <Title>Payment options available</Title>
                <Card.Actions style={{ justifyContent: "space-evenly" }}>
                   
                    <Button
                        style={{ backgroundColor: "#146bb3" }}
                        icon="cart" mode="contained" onPress={() => console.log('Pressed')}>
                        Buy Now </Button>
                      
                    <Button
                        style={{ backgroundColor: "#146bb3" }}
                        icon="credit-card" mode="contained" onPress={() => console.log('Pressed')}>
                        Pay with Card </Button>
                </Card.Actions>
                <Button
                        style={{ backgroundColor: "#146bb3",marginHorizontal:30 }}
                        icon="cash-marker" mode="contained" onPress={() => console.log('Pressed')}>
                        Cash on delivery </Button>
                        <AirbnbRating
  count={11}
  reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Excellent"]}
  defaultRating={11}
  size={20}
/>
            </Card>  
            <View style={{ backgroundColor: "powderblue" }}>
                <Title>Reviews</Title>
                <List.Section>
                    <List.Item title="USer1"
                    right={() => <List.Icon icon="dots-vertical" />}
                    left={() => <List.Icon icon="account" />} />
                    <Paragraph style={{ marginLeft: 50 }}>{random.words()}</Paragraph>
                    <List.Item
                        title="User2"
                        right={() => <List.Icon icon="dots-vertical" />}
                        left={() => <List.Icon color="#000" icon="account" />}
                    />
                    <Paragraph style={{ marginLeft: 50 }}>{random.words()}</Paragraph>
                </List.Section>
                <Button
                        style={{ backgroundColor: "orange" }}
                        icon="cart" mode="contained" onPress={() =>
                         navigation.navigate('Cart',{
                            url:url,
                            price:price,
                            Desc:Desc,
                            Name:Name
                         })}>
                        Add to Cart </Button>
                      
            </View>
        </ScrollView>
    )
}
export default ProductDetail;

const styles=StyleSheet.create({
    myScrollView:{
        backgroundColor: "#96ceff" ,
        flex:1,
        marginTop:15
    },
    myCard:{
        backgroundColor: "#69b9ff" ,
        paddingHorizontal:10,
        marginBottom:15,

    }
})