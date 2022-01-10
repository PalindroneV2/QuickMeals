import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity, Text, Image, StatusBar, FlatList } from "react-native";
import IconLabel from "../components/IconLabel";
import FoodList from "../components/FoodList";

const iconColor = '#6c5ce7'

const FoodListSource = [
    {
        foodname: 'Hamburger 1',
        category: 'Burgers',
        price: '$50',
        id: 1,
    },
    {
        foodname: 'Hamburger 2',
        category: 'Burgers',
        price: '$55',
        id: 2,
    },
    {
        foodname: 'Hamburger 3',
        category: 'Burgers',
        price: '$60',
        id: 3,
    },
    {
        foodname: 'Bake 1',
        category: 'Other',
        price: '$45',
        id: 4,
    },
    {
        foodname: 'Bake 2',
        category: 'Other',
        price: '$45',
        id: 5,
    },
    {
        foodname: 'Fries',
        category: 'Other',
        price: '$30',
        id: 6,
    },
    {
        foodname: 'Jalapenos',
        category: 'Other',
        price: '$35',
        id: 7,
    },
    {
        foodname: 'Soda',
        category: 'Drink',
        price: '$20',
        id: 8,
    },
    {
        foodname: 'Juice',
        category: 'Drink',
        price: '$15',
        id: 9,
    },
    {
        foodname: 'Ice Cream',
        category: 'Dessert',
        price: '$30',
        id: 10,
    },
];

const RestScreenHeader = () => {
    return <View style={styles.CardContainer}>
        <Image
            style={styles.ImageStyle}
            source={require('../../assets/mcdo.jpg')}
        />
        <View style={styles.infoStyle}>
            <Text style={styles.RestTitle}>Restaurant Name</Text>
            <View style={styles.iconLabelStyle}>
                <IconLabel
                    name="time"
                    label="30-40 min."
                    color={iconColor}
                />
                <IconLabel
                    name="pin-outline"
                    label="5 km"
                    color={iconColor}
                />
            </View>
        </View>
    </View>
};

const RestScreen = () => {
    return <View style={styles.MainContainer}>
        <RestScreenHeader />
        <StatusBar style="auto" />
        <FlatList
            data={FoodListSource}
            renderItem={({ item }) => {
                return <FoodList FoodInfo={item} />;
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(Food) => Food.id.toString()}
        />
    </View>
};


const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: '#6c5ce7',
        alignItems: 'center',
    },
    CardContainer: {
        width: deviceWidth,
        height: 210,
        backgroundColor: '#a29bfe',
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    ImageStyle: {
        height: 150,
        width: deviceWidth,
        opacity: 0.875,
        alignContent: 'center',
        alignSelf: 'center',
    },
    RestTitle: {
        fontSize: 15,
        fontWeight: '700',
    },
    infoStyle: {
        marginVertical: 2.5,
        marginHorizontal: 10,
    },
    iconLabelStyle: {
        marginTop: 2.5,
        flexDirection: 'row',
    },
});

export default RestScreen;