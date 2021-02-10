import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

function CustomButton({title, isDisabled, backgroudColor, disabledColor, textColor, callback }) {
    return (
        <>
           {
                isDisabled
                ?
                    <View style={{...styles.button, backgroundColor: disabledColor}} >
                        <Text style={{...styles.text, color:'#fff'}}>{title}</Text>
                    </View>
                :
                    <TouchableOpacity style={{...styles.button, backgroundColor: backgroudColor }} onPress={callback}>
                        <Text style={{...styles.text, color: textColor}}>{ title }</Text>
                    </TouchableOpacity>
            } 
        </>
    )
}

const styles = StyleSheet.create({

    button: {
        flex: 1,
        justifyContent:'center', 
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 2,
        borderWidth: 1,
        borderColor: '#ccc',
        minWidth: 100,
        height: 30
    },
    text: {
        fontSize: 12
    }
});

CustomButton.defaultProps = {
    title: 'Press Me 000000000',
    isDisabled: false,
    backgroudColor: '#1176b4',
    disabledColor: '#617694',
    textColor: '#fff',
    callback: ()=> console.log('Hello')
};

CustomButton.propTypes = {
    title: PropTypes.string,
    isDisabled: PropTypes.bool,
    backgroudColor: PropTypes.string,
    disabledColor: PropTypes.string,
    textColor: PropTypes.string,
    callback: PropTypes.func
};

export default CustomButton;
