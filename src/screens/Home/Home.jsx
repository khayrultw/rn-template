import React from "react";
import { SafeAreaView } from "react-native";
import { Button, TextView } from "../../components";
import ROUTES from "../../navigation/routes";

const Home = ({navigation}) => {

  return (
    <SafeAreaView>
      <TextView
        text={"Home screen"}
      />
      <Button
        onPress={() => {navigation.navigate(ROUTES.SPLASH)}}
        title={"Go to Splash"}
      />
    </SafeAreaView>
  )
}

export default Home;
