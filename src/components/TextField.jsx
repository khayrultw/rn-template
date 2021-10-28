import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import PropTypes from 'prop-types';

import {normalize} from "../utils";

const TextField = ({text, onChangeText}) => {

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="useless placeholder"
            />
        </View>
    );
};

TextField.propTypes = {
    text: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired

}

const styles = StyleSheet.create({
    input: {
        height: normalize(40),
        margin: normalize(12),
        borderWidth: 1,
        borderRadius: normalize(3),
        padding: normalize(10),
    },
});

export default TextField;
