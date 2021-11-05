import React, {useState} from "react";
import { SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Button, TextView } from "../../../components";
import ROUTES from "../../../navigation/routes";
import { decrement, increment } from "../../../redux/actions/counterActions";
import TextField from "../../../components/TextField";

const Home = ({navigation}) => {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();

    const [text, onChangeText] = useState("");

    return (
        <SafeAreaView>
            <TextView
                text={"Home screen"}
            />
            <Button
                onPress={() => {navigation.navigate(ROUTES.SPLASH)}}
                title={"Go to Splash"}
            />

            <TextView
                text={counter+""}
            />
            <Button
                onPress={() => {dispatch(increment())}}
                title={"increment"}
            />

            <Button
                onPress={() => {dispatch(decrement())}}
                title={"decrement"}
            />

            <TextField text={text} onChangeText={onChangeText} />
        </SafeAreaView>
    )
}

export default Home;
