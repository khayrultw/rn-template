import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from "react-native-safe-area-context";
import ROUTES from "./routes";
import COLORS from "../styles/colors";
import { normalize } from "../utils";

import { TextView } from "../components";



const Drawer = ({ navigation }) => {

  const onClickHome = () => {
    navigation.closeDrawer();
    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.HOME }],
    });
  }

  const IconButton = ({ title, icon, action, color }) => (
    <TouchableOpacity style={styles.iconButton} onPress={() => action && action()}>
      <Icon style={styles.icon} name={icon || ''} size={normalize(20)} color={color}/>
      <TextView
        text={title}
        fontSize={14}
      />
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <IconButton
          color={COLORS.primary}
          icon='home'
          title='Home'
          action={onClickHome}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  icon: {
    alignSelf: 'center',
    marginRight: 10,
    width: normalize(25)
  },
  iconButton: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: normalize(8.5)
  }
})

export default Drawer;
