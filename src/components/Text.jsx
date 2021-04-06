import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import normalize from "react-native-normalize";
import colors from "../styles/colors";

const Text = ({text, style, fontSize, color}) => {

  const textStyle = {
      ...style,
      fontSize: normalize(style.fontSize || fontSize),
      color: color
  }

  return (
    <Text style={textStyle}>
      {text}
    </Text>
  )
}

Text.defaultProps = {
  text: '',
  style: {
  },
  fontSize: 14,
  color: colors.black,
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
  fontSize: PropTypes.number,
  color: PropTypes.string
};

export default Text;
