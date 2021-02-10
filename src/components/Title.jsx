import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import normalize from "react-native-normalize";

const Title = ({ title, size, color, style }) => {
    const getStyle = () => {
        return {
            ...style,
            fontSize: size,
            color: color
        }
    }
    return(
        <Text style={getStyle()}>
            {title}
        </Text>
    )
}



Title.defaultProps = {
    title: 'title',
    size: normalize(16),
    color: '#000',
    style: {}
};

Title.propTypes = {
    title: PropTypes.string,
    size: PropTypes.numeric,
    color: PropTypes.string,
    style: PropTypes.object
};

export default Title;