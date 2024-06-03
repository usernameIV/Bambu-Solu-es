import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import InfoStyles from './ButtonInfoStyles';

const ButtonInfo = ({href , ImgSource}) => {
    return (
        <Link style={InfoStyles.buttonText} href={href} asChild>
            <TouchableOpacity style={InfoStyles.button}>
                <Image style={InfoStyles.info} source={ImgSource} />
            </TouchableOpacity>
        </Link>
    );
};

export default ButtonInfo;