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
<<<<<<< HEAD
 
export default ButtonLink;
=======

export default ButtonLink;
>>>>>>> 65ade162e94d8f613afd5a3790834779f1eac290
