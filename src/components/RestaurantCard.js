import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import IconLabel from "./IconLabel";

const iconColor = '#6c5ce7'

const RestCard = ({ info }) => {
    const { name, categories, deliveryTime, distance, image } = info;
    return (
        <View style={styles.ListContainer}>
            <View style={styles.CardContainer}>
                <Image
                    style={styles.ImageStyle}
                    source={image}
                />
                <View style={styles.infoStyle}>
                    <Text style={styles.RestTitle}>
                        {name}
                    </Text>
                    <Text style={styles.CategoryStyle}>
                        {categories}
                    </Text>
                    <View style={styles.iconLabelStyle}>
                        <IconLabel
                            name="time"
                            label={deliveryTime}
                            color={iconColor}
                        />
                        <IconLabel
                            name="pin-outline"
                            label={distance}
                            color={iconColor}
                        />
                    </View>
                </View>
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
        height: 200,
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
    },
    ImageStyle: {
        height: 125,
        width: deviceWidth - offset,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.875,
        alignContent: 'center',
        alignSelf: 'center',
    },
    RestTitle: {
        fontSize: 15,
        fontWeight: '700',
    },
    CategoryStyle: {
        fontSize: 12,
        fontWeight: '100',
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

export default RestCard;