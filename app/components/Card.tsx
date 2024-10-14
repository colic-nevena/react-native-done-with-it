import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText';

interface Props {
    title: string;
    subtitle: string;
    image: string
}

export default function Card({ title, subtitle, image }: Props) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} text={title} />
                <AppText style={styles.subtitle} text={subtitle} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 7
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
})