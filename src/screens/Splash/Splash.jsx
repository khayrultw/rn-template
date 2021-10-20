import React from "react";
import TextView from "../../components/TextView";
import { SafeAreaView } from "react-native";
import { Button } from "../../components";
import ROUTES from "../../navigation/routes";

const Splash = ({navigation}) => {

  return (
    <SafeAreaView>
      <TextView
        text={"Splash screen"}
      />
      <Button
        title={"Go to Home"}
        onPress={() => {navigation.navigate(ROUTES.HOME)}}
      />
    </SafeAreaView>
  )
}

export default Splash;
