import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'
import colors from '../config/colors'

export default function WelcomeScreen() {
    return (
        <ImageBackground blurRadius={3} style={styles.background} source={require("../assets/images/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image source={require("../assets/images/logo-red.png")} style={styles.logo} />
                <Text style={styles.tagline}>Sell what you don't need</Text>
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => console.log("bap bap radi")} />
                <AppButton color={colors.secondary} title="Register" onPress={() => console.log("bap bap radi")} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    tagline: {
        fontSize: 23,
        fontWeight: "600",
        paddingVertical: 20
    },
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonContainer: {
        padding: 20,
        width: "100%"
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    }
})
