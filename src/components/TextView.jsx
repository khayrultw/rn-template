import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import {normalize} from '../utils';

import colors from "../styles/colors";

const TextView = ({children, text, style, fontSize, color, textAlign}) => {

  const textStyle = {
    ...style,
    fontSize: normalize(style.fontSize || fontSize),
    color: color,
    textAlign: style.textAlign || textAlign
  }

  return (
    <Text style={textStyle}>
      {text}{children}
    </Text>
  )
}

TextView.defaultProps = {
  text: '',
  style: {
  },
  fontSize: 14,
  color: colors.black,
  textAlign: 'left'
};

TextView.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  textAlign: PropTypes.string
};

export default TextView;
