import React from "react";
import { View, Text, TextInput} from "react-native";
import InputStyles from './InputStyles';
import CORES from '../../../constants/cores';

const InputLink = ({placeholder, text, ...rest }) => {
    return(
        <View>
            <Text style={InputStyles.text}>{text}</Text>
            <TextInput
            placeholder={placeholder}
            placeholderTextColor={CORES.branco}
            style={InputStyles.input}   
            {... rest}
            />
        </View>
    );
}
export default InputLink;