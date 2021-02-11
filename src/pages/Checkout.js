import React, { useState, useEffect } from 'react';
import { random, commerce } from 'faker';
import {ListItem,Radio,Right} from 'native-base';
import FAIcon  from 'react-native-vector-icons/FontAwesome';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { Button, TextInput, Card, Title, List, Paragraph } from 'react-native-paper';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
//import components
import Header from '../components/Header';
function Checkout({ navigation }) {


    return (
        <ScrollView style={styles.container}>
            <Header Title="Checkout" />
            <View style={styles.myView}>
                <Title style={{ fontSize: 24, fontWeight: "bold" }}>Shipping Information</Title>
                <TextInput style={styles.TextInput}
                    placeholder="Name"

                    label="Name"
                //   value={text}
                //   onChangeText={text => setText(text)}
                />
                <TextInput style={styles.TextInput}
                    placeholder="Email/Username"

                    label="Email"
                //   value={text}
                //   onChangeText={text => setText(text)}
                />
                <TextInput style={styles.TextInput}
                    placeholder="Phone"
                    label="Phone"
                //   value={text}
                //   onChangeText={text => setText(text)}
                />
                <TextInput style={styles.TextInput}
                    placeholder="Country"
                    label="Country"
                //   value={text}
                //   onChangeText={text => setText(text)}
                />
                <TextInput style={styles.TextInput}
                    placeholder="Address"
                    label="Address"
                //   value={text}
                //   onChangeText={text => setText(text)}
                />
                <TextInput style={styles.TextInput}
                    placeholder="City"
                    label="City"
                //   value={text}
                //   onChangeText={text => setText(text)}
                />
                <TextInput style={styles.TextInput}
                    placeholder="PinCode"
                    label="PinCode"
                //   value={text}
                //   onChangeText={text => setText(text)}
                />
            </View>
            <Text style={{ marginTop: 15, fontSize: 18 }}>Your order</Text>
            <View>
                <List.Item
                    title="First Item"
                    description="Item description"
                    right={props => <Text>{commerce.price()}</Text>}
                    left={props => <List.Icon {...props} icon="tshirt-v" />}
                />
                <List.Item
                    title="Second Item"
                    description="Item description"
                    right={props => <Text>{commerce.price()}</Text>}
                    left={props => <List.Icon {...props} icon="tshirt-v" />}
                />

                <View style={styles.line} />
                <Grid style={{ paddingLeft: 10, paddingRight: 10, marginTop: 7 }}>


                    <Col>
                        <Text style={{ fontSize: 18, fontStyle: 'italic' }}>Total</Text>
                    </Col>
                    <Col>
                        <Text style={{ textAlign: 'right', fontSize: 18, fontWeight: 'bold' }}>
                            {commerce.price() * 5}</Text>
                    </Col>

                </Grid>
            </View>
            <View>
            <Text style={{marginTop: 15, marginBottom: 7, fontSize: 18}}>Payement method</Text>
            <ListItem style={{borderWidth: 1, borderColor: 'rgba(149, 165, 166, 0.3)', paddingLeft: 10, marginLeft: 0}}>
              <Text>Pay with card</Text>
              <FAIcon name="cc-mastercard" size={20} color="#c0392b" style={{marginLeft: 7}} />
              <FAIcon name="cc-visa" size={20} color="#2980b9" style={{marginLeft: 2}} />
              <Right>
                <Radio  />
              </Right>
            </ListItem>
            <ListItem style={{borderWidth: 1, borderColor: 'rgba(149, 165, 166, 0.3)', paddingLeft: 10, marginLeft: 0, borderTopWidth: 0}}>
              <Text>Pay with Paypal</Text>
              <FAIcon name="cc-paypal" size={20} color="#34495e" style={{marginLeft: 7}} />
              <Right>
                <Radio  />
              </Right>
            </ListItem>
            <ListItem style={{borderWidth: 1, borderColor: 'rgba(149, 165, 166, 0.3)', paddingLeft: 10, marginLeft: 0, borderTopWidth: 0}}>
              <Text>Cash on Delivery</Text>
              <Right>
                <Radio  />
              </Right>
            </ListItem>
            <Button style={{backgroundColor:"orange"}} icon="credit-card" 
            mode="contained" onPress={() => alert("Paymet Successful,  your item will be delivred on time,  keep shopping")}>
    Proceed to Pay
  </Button>
            </View>

        </ScrollView>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop:15
    },
    myView: {
        padding: 5,
    },
    TextInput: {
        marginBottom: 3,
    }


})


export default Checkout;