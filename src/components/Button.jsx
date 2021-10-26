import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import {normalize} from '../utils';
import Icon from "react-native-vector-icons/dist/FontAwesome5";
import TextView from "./TextView";
import colors from "../styles/colors";

function Button({title, style, icon, iconColor, iconSize, fontSize, disabled, backgroundColor, disabledColor, textColor, onPress }) {

  const buttonStyle = {
    ...styles.button,
    ...style,
    backgroundColor: disabled ? disabledColor + 'AA' : backgroundColor,
  }

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.row}>
        {!!icon && (
          <Icon
            name={icon}
            size={normalize(iconSize)}
            color={iconColor}
            style={styles.icon}
          />
        )}
        <TextView
          color={ textColor }
          text={title}
          fontSize={fontSize}
        />
      </View>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  title: 'Press Me',
  icon: '',
  fontSize: 16,
  iconSize: 16,
  iconColor: colors.white,
  disabled: false,
  backgroundColor: colors.primary,
  disabledColor: colors.primary,
  textColor: colors.white,
  style: {}
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  disabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  disabledColor: PropTypes.string,
  textColor: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    marginVertical: 5,
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(5),
  },
  icon: {
    alignSelf: 'center',
    marginRight: normalize(5)
  },
  row: {
    flexDirection: 'row',
  }
})

export default Button;
