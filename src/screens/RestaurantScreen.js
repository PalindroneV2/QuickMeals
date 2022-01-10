import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity, Text, Image } from "react-native";
import IconLabel from "../components/IconLabel";

const iconColor = '#6c5ce7'

const RestScreen = () => {
    return <View style={styles.MainContainer}>
        <View style={styles.CardContainer}>
            <Image
                style={styles.ImageStyle}
                source={require('../../assets/mcdo.jpg')}
            />
            <View style={styles.infoStyle}>
                <Text style={styles.RestTitle}>PLACEHOLDER NAME</Text>
                <View style={styles.iconLabelStyle}>
                    <IconLabel
                        name="time"
                        label="30-40 min."
                        color={iconColor}
                    />
                    <IconLabel
                        name="pin-outline"
                        label= "5 km"
                        color={iconColor}
                    />
                </View>
            </View>
        </View>
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