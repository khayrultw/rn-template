import React from "react";
import { useSelector, useDispatch} from "react-redux";
import TextView from "../../components/TextView";
import { SafeAreaView } from "react-native";
import { Button } from "../../components";
import ROUTES from "../../navigation/routes";
import { decrement, increment } from "../../redux/actions/counterActions";

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

      <Button
        onPress={() => {dispatch(decrement())}}
        title={"decrement"}
      />
    </SafeAreaView>
  )
}

export default Splash;
