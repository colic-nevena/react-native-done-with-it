import React from 'react'
import { Text } from 'react-native'
import defaultStyles from "../config/styles"

interface Props {
    text: string;
    style?: object
}

export default function AppText({ text, style }: Props) {
    return (
        <Text style={[defaultStyles.text, style]}>
            {text}
        </Text>
    )
}