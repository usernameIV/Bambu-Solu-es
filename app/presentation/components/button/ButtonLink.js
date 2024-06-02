import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import styles from './ButtonLinkStyles';

const ButtonLink = ({href, text}) => {
    return (
        <Link href={href} asChild>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </Link>
    );
};
 
export default ButtonLink;