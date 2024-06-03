import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Button2Styles from './ButtonWhiteStyles';
<<<<<<< HEAD
 
=======

>>>>>>> 65ade162e94d8f613afd5a3790834779f1eac290
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
