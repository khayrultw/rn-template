import { StyleSheet } from 'react-native';
import colors from './colors';

const buttonStyle = {
  alignItems: 'center',
  borderRadius: 4,
  minWidth: 50,
  paddingHorizontal: 5,
  paddingVertical: 3,
};

export default StyleSheet.create({
  btnDanger: {
    ...buttonStyle,
    backgroundColor: colors.danger
  },

  btnPrimary: {
    ...buttonStyle,
    backgroundColor: colors.primary
  },

  btnSuccess: {
    ...buttonStyle,
    backgroundColor: colors.success
  },
  row: {
    flexDirection: 'row'
  },

  selfCenter: {
    alignSelf: 'center'
  },

  selfEnd: {
    alignSelf: 'flex-end'
  },

  selfStart: {
    alignSelf: 'flex-start'
  },

  flex1: { flex: 1 },
  m5: { margin: 5 },
  m10: { margin: 10 },
  m15: { margin: 15 },
  m20: { margin: 20 },
  ml5: { marginLeft: 5 },
  ml10: { marginLeft: 10 },
  ml15: { marginLeft: 15 },
  ml20: { marginLeft: 20 },
  mr5: { marginRight: 5 },
  mr10: {marginRight: 10},
  mr15: {marginRight: 15},
  mr20: {marginRight: 20},
  mt5: {marginTop: 5},
  mt10: {marginTop: 10},
  mt15: {marginTop: 15},
  mt20: {marginTop: 20},
  mb5: {marginBottom: 5},
  mb10: {marginBottom: 10},
  mb15: {marginBottom: 15},
  mb20: {marginBottom: 20},
  mh5: {marginHorizontal: 5},
  mh10: {marginHorizontal: 10},
  mh15: {marginHorizontal: 15},
  mh20: {marginHorizontal: 20},
  mv5: {marginVertical: 5},
  mv10: {marginVertical: 10},
  mv15: {marginVertical: 15},
  mv20: {marginVertical: 20},
  p5: { margin: 5 },
  p10: { margin: 10 },
  p15: { margin: 15 },
  p20: { margin: 20 },
  pl5: { marginLeft: 5 },
  pl10: { marginLeft: 10 },
  pl15: { marginLeft: 15 },
  pl20: { marginLeft: 20 },
  pr5: {marginRight: 5},
  pr10: {marginRight: 10},
  pr15: {marginRight: 15},
  pr20: {marginRight: 20},
  pt5: {marginTop: 5},
  pt10: {marginTop: 10},
  pt15: {marginTop: 15},
  pt20: {marginTop: 20},
  pb5: {marginBottom: 5},
  pb10: {marginBottom: 10},
  pb15: {marginBottom: 15},
  pb20: {marginBottom: 20},
  ph5: {marginHorizontal: 5},
  ph10: {marginHorizontal: 10},
  ph15: {marginHorizontal: 15},
  ph20: {marginHorizontal: 20},
  pv5: {marginVertical: 5},
  pv10: {marginVertical: 10},
  pv15: {marginVertical: 15},
  pv20: {marginVertical: 20},
})
