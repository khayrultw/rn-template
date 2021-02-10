import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight, StyleSheet, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import normalize from "react-native-normalize";


const OutlineButton = ({title, style, isChecked, onPress, disabled, isSelected }) => {
    const [color, setColor] = useState({
        textColor: style.textColor,
        backgroundColor: 'transparent'
    });

    useEffect( () => {
        if(isSelected){
            setColor({textColor: '#fff', backgroundColor: style.underlayColor});
        }
        else{
            setColor({textColor: style.textColor, backgroundColor: 'transparent'});
        }
    }, [isSelected]);

    const _onPress = () => {
        setColor({textColor: '#fff', backgroundColor: style.underlayColor});
        onPress();
    }

    return (
        <TouchableHighlight
            onPress={() => _onPress()}
            underlayColor={style.underlayColor}
            onShowUnderlay={() => setColor({...color, textColor: '#fff'})}
            onHideUnderlay={() => setColor({...color, textColor: isSelected?'#fff':style.textColor})}
            style={
                {
                    width: style.width ? style.width : null,
                    ...styles.button,
                    borderColor: isChecked ? COLORS.green : style.borderColor,
                    backgroundColor: color.backgroundColor,
                    opacity: disabled ? 0.7 : 1,
                }
            }
            disabled={isChecked || disabled}
        >
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                {isChecked && (
                    <FontAwesomeIcon size={ normalize(14) }
                        icon={ faCheck }
                        style={
                            {
                                ...styles.icon,
                                color: isChecked?COLORS.green:color.textColor
                            }
                        }
                    />
                )}
                <Text style={
                    {
                        color: isChecked ? COLORS.green : color.textColor,
                        textAlign: 'center',
                        fontSize: style.fontSize ? normalize(style.fontSize) : normalize(15),
                        opacity: disabled ? 0.7 : 1
                    }
                }>
                    {title}
                </Text>
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
        underlayColor: '#1176b4',
        textColor: '#fff',
        borderColor: '#1176b4',
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