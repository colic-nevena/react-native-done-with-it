import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "../config/colors"

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={30} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={30} />
            </View>
            <Image resizeMode="contain" style={styles.image} source={require("../assets/images/chair.jpg")} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%"
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30
    }
})
