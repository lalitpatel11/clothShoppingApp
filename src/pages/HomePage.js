import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import {  Card, Title } from 'react-native-paper';
import Header from '../components/Header';
const HomePage = ({ navigation }) => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: "Men's Wear",
            uri: 'https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: "Women's Wear",
            uri: 'https://images.unsplash.com/photo-1598854798416-bdab748b1d4c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW4ncyUyMGNsb3RofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: "Child's wear",
            uri: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
    ];
    const Item = ({ title, uri }) => (
            <Card style={{
                marginBottom:5,
                padding:4,
                elevation:4,

            }} onPress={() => navigation.navigate('ProductList', { title: title })}>
                <Title style={{fontSize:24,fontWeight:"bold"}}>{title}</Title>
                <Card.Cover source={{ uri: uri }} />
            </Card>
    );
    const renderItem = ({ item }) => (
        <Item title={item.title} uri={item.uri} />
    );
    return (
        <View style={styles.container}>
            <Header Title="HomePage" />
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
export default HomePage;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
    },

})