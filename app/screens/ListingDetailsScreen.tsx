import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/images/jacket.jpg")} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} text="Red jacket for sale" />
                <AppText style={styles.price} text="$100" />

                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/images/mosh.jpg")}
                        title="Mosh Hamedami"
                        subtitle="5 listings"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 35
    }
})