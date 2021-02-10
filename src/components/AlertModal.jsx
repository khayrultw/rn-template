import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import normalize from "react-native-normalize";

const AlertModal = forwardRef((props, ref) => {

    const initial = {
        visible: false,
        title: '',
        description: 'Are you sure?',
        action: null
    }
    const [info, setInfo] = useState(initial);

    useImperativeHandle(ref, () => ({
        show: (description, action) => {
            const currentInfo = {
                visible: true,
                description: description ? description : initial.description,
                action: action ? action : initial.action
            }
            setInfo(currentInfo);
        }
    }));

    const onPressConfirm = () => {
        setInfo(initial);
        info.action && info.action()
    }

    return (
        <Modal transparent={true} visible={info.visible}>
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    {info.action && (
                        <Text style={styles.confirmText}>Confirmation?</Text>
                    )}
                    <Text style={styles.dailogue}>{info.description}</Text>
                    <View style={styles.buttonContainer}>
                        {info.action && (
                            <TouchableOpacity
                                style={styles.cancel}
                                onPress={() => {
                                    setInfo(initial)
                                }}>
                                <Text style={{ color: 'white' }}>Cancel</Text>
                            </TouchableOpacity>
                        )}

                        <TouchableOpacity
                            style={styles.confirm}
                            onPress={onPressConfirm}>
                            <Text style={{ color: 'white' }}>{info.action ? 'Confirm' : 'OK'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
})

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#000000aa',
        padding: 20
    },
    innerContainer: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingTop: 25,
        alignItems: "center",
        alignSelf: 'stretch'
    },
    confirmText: {
        color: 'black',
        alignSelf: 'flex-start',
        fontSize: normalize(22)
    },
    dailogue: {
        color: '#424242',
        alignSelf: 'flex-start',
        paddingVertical: 10,
        fontSize: normalize(18)
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 20,
        marginRight: 0,
        alignSelf: 'flex-end'
    },
    cancel: {
        backgroundColor: '#f80f1b',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    },
    confirm: {
        backgroundColor: "#2196F3",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginLeft: 10,
        borderRadius: 5
    }
});

export default AlertModal
