import React from 'react'
import { Platform, Text, StyleSheet } from 'react-native'

interface Props {
    text: string;
    style?: object
}

export default function AppText({ text, style }: Props) {
    return (
        <Text style={[styles.text, style]}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        ...Platform.select({
            ios: {
                fontFamily: "Avenir"
            },
            android: {
                fontFamily: "Roboto"
            }
        })
    }
})