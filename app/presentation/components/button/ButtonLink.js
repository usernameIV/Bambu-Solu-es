import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import ButtonStyles from "./ButtonLinkStyles";

const ButtonLink = ({ href, text, ...rest }) => {
  return (
    <Link href={href} asChild>
      <TouchableOpacity style={ButtonStyles.button} {...rest}>
        <Text style={ButtonStyles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </Link>
  );
};


export default ButtonLink;