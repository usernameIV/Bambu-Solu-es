import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import ButtonStyles from './ButtonStyles';


const ButtonLink = ({href, text}) => {
    return (
        <Link href={href} asChild>
            <TouchableOpacity style = {ButtonStyles.button}>
                <Text style = {ButtonStyles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </Link>
    );
};

export default ButtonLink;