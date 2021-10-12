import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native';

import colors from "../styles/colors";
import TextView from "./TextView";
import { useDimension } from "../hooks";

const AlertModal = forwardRef((props, ref) => {
    const initial = {
        visible: false,
        title: 'Confirmation?',
        description: 'Are you sure?',
        action: null,
        cancelAction: null,
        actionButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        actionButtonColor: '#2196F3',
        cancelButtonColor: '#f80f1b'
    }

    const [info, setInfo] = useState(initial);
    const dimension = useDimension();

    useImperativeHandle(ref, () => ({
        show: (args) => {
            const {
                title,
                description,
                action,
                cancelAction,
                actionButtonText,
                cancelButtonText,
                actionButtonColor,
                cancelButtonColor,
            } = args;
            const currentInfo = {
                title: title ? title : initial.title,
                visible: true,
                description: description ? description : initial.description,
                action: action ? action : initial.action,
                cancelAction: cancelAction ? cancelAction : initial.cancelAction,
                actionButtonText: actionButtonText ? actionButtonText : initial.actionButtonText,
                actionButtonColor: actionButtonColor ? actionButtonColor : initial.actionButtonColor,
                cancelButtonText: cancelButtonText ? cancelButtonText : initial.cancelButtonText,
                cancelButtonColor: cancelButtonColor ? cancelButtonColor : initial.cancelButtonColor
            }

            setTimeout( () => setInfo(currentInfo), 100);
        }
    }));

    const contentStyle = {
        ...styles.content,
        width: Math(dimension.width, dimension.height) - 30
    };

    const onPressConfirm = () => {
        setInfo(initial);
        info.action && info.action();
    }

    const onPressCancel = () => {
        setInfo(initial);
        info.cancelAction && info.cancelAction();
    }

    return (
      <Modal transparent={true} visible={info.visible}>
          <View style={styles.container}>
              <View style={contentStyle}>
                  {info.action && (
                    <TextView
                      text={info.title}
                      style={styles.confirmText}
                      fontSize={22}
                      color={colors.black}
                    />
                  )}
                  <TextView
                    text={info.description}
                    style={styles.dialogue}
                    fontSize={18}
                    color={colors.grey800}
                  />
                  <View style={styles.buttonContainer}>
                      <TouchableOpacity
                        style={{ ...styles.confirm, backgroundColor: info.actionButtonColor }}
                        onPress={onPressConfirm}>
                          <TextView
                            text={info.action ? info.actionButtonText : 'OK'}
                            color={colors.white}
                          />
                      </TouchableOpacity>

                      {info.action && (
                        <TouchableOpacity
                          style={{ ...styles.cancel, backgroundColor: info.cancelButtonColor }}
                          onPress={onPressCancel}>
                            <TextView
                              text={info.cancelButtonText}
                              color={colors.white}
                            />
                        </TouchableOpacity>
                      )}
                  </View>
              </View>
          </View>
      </Modal>
    )
})

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 20,
        marginRight: 0,
        alignSelf: 'flex-end'
    },
    cancel: {
        alignItems: 'center',
        borderRadius: 5,
        minWidth: 50,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    confirm: {
        alignItems: 'center',
        borderRadius: 5,
        marginRight: 10,
        minWidth: 50,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    confirmText: {
        alignSelf: 'flex-start'
    },
    dialogue: {
        alignSelf: 'flex-start',
        paddingVertical: 10
    },
    content: {
        alignItems: "center",
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingTop: 25
    },
    container: {
        alignItems: "center",
        backgroundColor: '#000000aa',
        flex: 1,
        justifyContent: "center",
        padding: 20
    }
});

export default AlertModal
