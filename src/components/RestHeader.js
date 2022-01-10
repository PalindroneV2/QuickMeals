import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';

const RestHeader = ({ info }) => {
    const { restname, categories, deliveryTime, distance, image } = info;

    return <View style={styles.CardContainer}>
        <Image
            style={styles.ImageStyle}
            source={image}
        />
        <Text style={styles.RestTitle}>{restname}</Text>
    </View>
}

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    CardContainer: {
        width: deviceWidth,
        height: 200,
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
        height: 125,
        width: deviceWidth,
        opacity: 0.875,
        alignContent: 'center',
        alignSelf: 'center',
    },
    RestTitle: {
        fontSize: 15,
        fontWeight: '700',
    },
});

export default RestHeader;