import React from "react";
import { useSelector, useDispatch} from "react-redux";
import TextView from "../../components/TextView";
import { SafeAreaView } from "react-native";
import { Button } from "../../components";
import ROUTES from "../../navigation/routes";
import { increment } from "../../redux/actions";

const Splash = ({navigation}) => {

  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <TextView
        text={"Splash screen"}
      />
      <Button
        title={"Go to Home"}
        onPress={() => {navigation.navigate(ROUTES.HOME)}}
      />

      <TextView
        text={counter+''}
      />

      <Button
        title={"increment"}
        onPress={() => {dispatch(increment())}}
      />
    </SafeAreaView>
  )
}

export default Splash;
