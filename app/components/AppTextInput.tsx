import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import defaultStyles from "../config/styles"

interface Props {
    icon?: any;
    placeholder: string;
}

export default function AppTextInput({ icon, placeholder }: Props) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.lightGrey} />}
            <TextInput style={defaultStyles.text} placeholder={placeholder} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
        marginTop: 4
    }
})