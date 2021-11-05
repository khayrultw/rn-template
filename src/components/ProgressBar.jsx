import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../../themes/Colors";
import TextView from "../TextView";


const ProgressBar = ({width, height, color, progress, fontSize}) => {

    return (
        <View style={{
            width: width,
            height: height,
            borderColor: color,
            borderWidth: 1,
            position: 'relative'
        }}>
            <View
                style={{
                    backgroundColor: color,
                    width: progress+'%',
                    height: height - 1
                }}
            />
           <View style={styles.text}>
               <TextView
                   text={progress+'%'}
                   color={progress < 50 ? color:colors.white }
                   fontSize={fontSize}
                   textAlign={'center'}
                   style={{alignSelf: 'center'}}
               />
           </View>
        </View>
    )
}

ProgressBar.defaultProps = {
    width: 100,
    height: 15,
    color: colors.primary,
    progress: 25,
    fontSize: 10
}

const styles = StyleSheet.create({
    text: {
        position: 'absolute',
        alignSelf: 'center'
    }
})

export default ProgressBar;
