import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

import { Button, TextView } from "../../components";
import ROUTES from "../../navigation/routes";

const Home = ({navigation}) => {

  const state = useSelector(state => state);

  useEffect(() => {
    console.log("state: ", state);
  }, [])
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
