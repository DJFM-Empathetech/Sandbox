import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, color }) => {
    const buttonStyles = {
        ...styles.button,
        backgroundColor: color,
    };

    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Button;
