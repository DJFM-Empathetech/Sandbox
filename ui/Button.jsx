import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress }) => {
    const [color, setColor] = useState('#000000');

    const colorRandom = () => {
        const color = Math.floor(Math.random() * 16777215).toString(16);
        return `#${color}`;
    };

    const buttonStyles = {
        ...styles.button,
        backgroundColor: color,
    };

    return (
        <TouchableOpacity style={buttonStyles} onPress={() => {
            setColor(colorRandom);
            onPress()
        }}>
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
