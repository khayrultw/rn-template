import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
let mask = '__/__/____';

const MaskTextInput = ({initialMask}) => {
    const [txt, setTxt] = useState('');

    useEffect(() => {
        mask = initialMask;
    }, []);

    const onChangeText = (text) => {
      if(txt.length > text.length){
        mask = text + initialMask.substr(text.length, initialMask.length);
        setTxt(text);
        return ;
      }
      if(initialMask.charAt(text.length) !== '_'){
          text = text + initialMask.charAt(text.length);
          mask = text + initialMask.substr(text.length, initialMask.length);
          setTxt(text);
      } else {
        mask = text + initialMask.substr(text.length, initialMask.length);
        setTxt(text);
      }
    }

    return (
        <View style={{position: 'relative', borderWidth: 1, borderColor: 'black', margin: 10}}>
            <TextInput
              style={{padding: 0}}
              value={txt}
              onChangeText={text => {onChangeText(text)}}
              selection={{start: txt.length, end: txt.length}}
              maxLength={initialMask.length}
            />
            <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center'}}>
              <Text>{mask}</Text>
            </View>
        </View>
    )
}

export default MaskTextInput;
