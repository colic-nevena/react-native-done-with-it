import React from 'react'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'
import AppText from './AppText'
import { StyleSheet } from 'react-native';

interface Props {
    label: string;
    onPress: () => void
}

export default function PickerItem({ label, onPress }: Props) {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <TouchableOpacity onPress={onPress}>
                <AppText text={label} style={styles.text} />
            </TouchableOpacity>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 10
    }
})