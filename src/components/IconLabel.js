import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const IconLabel = ({name,label,color}) => {
    return (
        <View style={styles.Container}>
            <Icon
                name={name}
                type="ionicon"
                size={14.5}
                color={color}
                style={styles.iconStyle}
            />
            <Text style={styles.labelStyle}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        marginRight: 10,
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: 12.5,
    },
    iconStyle: {
        marginRight: 2,
    },
});

export default IconLabel;