import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Button2Styles from './ButtonWhiteStyles';
 
const WhiteButton = ({ href, text }) => {
    return (
        <Link href={href} asChild>
            <TouchableOpacity style={Button2Styles.button}>
                <Text style={Button2Styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </Link>
    );
};

export default WhiteButton;
