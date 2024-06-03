import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import PlusStyles from './ButtonPlusStyles';

const ButtonPlus = ({href , ImgSource}) => {
    return (
        <Link style={PlusStyles.buttonText} href={href} asChild>
            <TouchableOpacity style={PlusStyles.button}>
                <Image style={PlusStyles.plus} source={ImgSource} />
            </TouchableOpacity>
        </Link>
    );
};


export default ButtonPlus;