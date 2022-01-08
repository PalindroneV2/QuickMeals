import React from 'react'
import { StyleSheet, View, Text, StatusBar, FlatList } from 'react-native'
import Header from '../components/Header';
import RestCard from '../components/RestaurantCard';

const RestaurantList = [
    {
        name: 'Muffin Man Bakery',
        categories: 'Postres, Pasteles, Reposteria',
        deliveryTime: '20-30 min.',
        distance: '3 km',
        image: require('../../assets/the-muffin-man-bakery.jpg'),
        id: 1,
    },
    {
        name: 'McDonalds Megaplex',
        categories: 'Americana, Hamburguesas, Cafe',
        deliveryTime: '30-40 min.',
        distance: '4 km',
        image: require('../../assets/mcdo.jpg'),
        id: 2,
    },
    {
        name: 'Central Perk Coffee House',
        categories: 'Pasteles, Reposteria, Cafe',
        deliveryTime: '30-40 min.',
        distance: '4.1 km',
        image: require('../../assets/central-perk.jpg'),
        id: 3,
    },
    {
        name: 'Wildbread Bakery',
        categories: 'Reposteria, Americana, Sandwiches, Hamburguesas',
        deliveryTime: '35-45 min.',
        distance: '4.5 km',
        image: require('../../assets/wildbread-bakery.jpg'),
        id: 4,
    },
    {
        name: 'Jollibee',
        categories: 'Italiano, Spaghetti, Pizza, Pasta',
        deliveryTime: '45-60 min.',
        distance: '4.75 km',
        image: require('../../assets/jollibee.jpg'),
        id: 5,
    },
];

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header label="QuickMeals" />
            {/*<RestCard />*/}
            <StatusBar style="auto" />
            <FlatList
                data={RestaurantList}
                renderItem={({ item }) => {
                    return <RestCard info={item} />;
                }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(Restaurant) => Restaurant.id.toString()}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6c5ce7',
        alignItems: 'center',
    },
});

export default HomeScreen;