import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, StyleSheet, View } from 'react-native';
import {normalize} from '../utils';

import colors from "../styles/colors";
import TextView from "./TextView";

const OutlineButton = ({title, style, onPress, disabled, isSelected }) => {
    const [color, setColor] = useState({
        textColor: style.textColor,
        backgroundColor: 'transparent'
    });

    useEffect( () => {
        if(isSelected){
            setColor({textColor: colors.white, backgroundColor: style.underlayColor});
        }
        else{
            setColor({textColor: style.textColor, backgroundColor: 'transparent'});
        }
    }, [isSelected]);

    const _onPress = () => {
        setColor({textColor: colors.white, backgroundColor: style.underlayColor});
        onPress();
    }

    const buttonStyle = {
        width: style.width ? style.width : null,
        ...styles.button,
        borderColor: style.borderColor,
        backgroundColor: color.backgroundColor,
        opacity: disabled ? 0.7 : 1,
    }

    return (
        <TouchableHighlight
            onPress={() => _onPress()}
            underlayColor={style.underlayColor}
            onShowUnderlay={() => setColor({...color, textColor: colors.white})}
            onHideUnderlay={() => setColor({...color, textColor: isSelected?colors.white:style.textColor})}
            style={buttonStyle}
            disabled={disabled}
        >
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TextView
                  text={title}
                  style={{opacity: disabled ? 0.7 : 1}}
                  fontSize={style.fontSize ? style.fontSize : 15}
                  color={color.textColor}
                  textAlign={'center'}
                />
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    icon: {
        marginRight:5,
        alignSelf:'center'
    },

    button: {
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderRadius: normalize(20),
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(15),
        marginHorizontal: normalize(7),
        marginVertical: normalize(7)
    }
});

OutlineButton.defaultProps = {
    title: 'Press Me',
    style: {
        underlayColor: colors.primary,
        textColor: colors.white,
        borderColor: colors.primary,
    },
    isChecked: false,
    isSelected: false,
    disabled: false,
    onPress: ()=> console.log('Hello')
};

OutlineButton.propTypes = {
    title: PropTypes.string,
    style: PropTypes.object,
    isChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    isSelected: PropTypes.bool,
    onPress: PropTypes.func
};

export default OutlineButton;
