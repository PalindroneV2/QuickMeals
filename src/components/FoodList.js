import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const iconColor = '#6c5ce7'

const FoodList = ({ FoodInfo }) => {
    const { foodname, category, price } = FoodInfo;
    return (
        <View style={styles.ListContainer}>
            <View style={styles.CardContainer}>
                <View style={styles.infoStyle}>
                    <Text style={styles.FoodTitle}>
                        {foodname}
                    </Text>
                    <Text style={styles.CategoryStyle}>
                        {category}
                    </Text>
                </View>

                <Text style={styles.PriceStyle}>
                    {price}
                </Text>
            </View>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const radius = 20;
const offset = 30;

const styles = StyleSheet.create({
    ListContainer: {
        width: deviceWidth - 20,
        alignItems: 'center',
        marginVertical: 12.5,
    },
    CardContainer: {
        width: deviceWidth - offset,
        height: 50,
        backgroundColor: '#a29bfe',
        borderRadius: radius,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    FoodTitle: {
        fontSize: 15,
        fontWeight: '700',
    },
    PriceStyle: {
        marginVertical: 2.5,
        fontSize: 25,
        fontWeight: '700',
        marginHorizontal: 10,
    },
    CategoryStyle: {
        fontSize: 12,
        fontWeight: '100',
    },
    infoStyle: {
        marginVertical: 2.5,
        marginHorizontal: 10,
    },
});

export default FoodList;