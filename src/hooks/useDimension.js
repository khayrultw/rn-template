import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('screen');

const useDimension = () => {
  const [dimension, setDimension] = useState({width, height});

  useEffect(() => {
    Dimensions.addEventListener('change', ({window:{width,height}})=>{
      setDimension({width, height});
    });
    return () => {
      Dimensions.removeEventListener('change', () => {});
    };
  }, []);

  return dimension;
};

export default useDimension;
