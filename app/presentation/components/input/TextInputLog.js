import React from 'react';
import {TextInput} from 'react-native';
import CORES from '../../../constants/cores' ;
import StylesRegister from '../../screens/auth/AuthStyles/RegisterStyle';



const InputLog = ({ placeholder, value, onChangeText, keyboardType, autoCapitalize }) => {
    return (
        <TextInput 
            placeholder={placeholder}
            placeholderTextColor={CORES.branco} 
            style={StylesRegister.input}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            value={value}
            onChangeText={onChangeText}
        />      
    );
};

export default InputLog;
