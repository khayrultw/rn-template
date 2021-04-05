/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MaskTextInput from "./src/components/MaskTextInput";

const App = () => {
  return (
    <>
      <MaskTextInput
        initialMask={'__/__/____'}
      />
    </>
  );
};

export default App;
