import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import normalize from "react-native-normalize";
import Icon from "react-native-vector-icons/FontAwesome5";
import Text from "./Text";
import colors from "../styles/colors";

function Button({title, style, icon, iconColor, iconSize, fontSize, disabled, backgroundColor, disabledColor, textColor, onPress }) {

  const buttonStyle = {
    ...styles.button,
    ...style,
    backgroundColor: disabled ? disabledColor + 'AA' : backgroundColor,
  }

  return (
    <>
      <TouchableOpacity
        style={buttonStyle}
        onPress={onPress}
        disabled={disabled}
      >
        {!!icon && (
          <Icon
            name={icon}
            size={iconSize}
            color={iconColor}
            style={styles.icon}
          />
        )}
        <Text
          color={ textColor }
          text={title}
          fontSize={fontSize}
        />
      </TouchableOpacity>
    </>
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
  textColor: colors.black,
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
    alignSelf: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(5),
  },
  icon: {
    alignSelf: 'center',
    marginRight: normalize(5)
  }
})

export default Button;
