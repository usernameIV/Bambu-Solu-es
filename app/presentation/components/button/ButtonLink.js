import React from "react";
import { TouchableOpacity, TextInput, StyleSheet } from "react-native-gesture-handler";
import { Link } from "expo-router";
import styles from './ButtonLinkStyles';

const ButtonLink = ({href, text}) => {
    return (
        <Link href={href}>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </Link>
    );
};

export default ButtonLink;