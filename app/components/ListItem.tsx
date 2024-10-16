import React, { ReactNode } from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ImageSourcePropType, View, StyleSheet, Image } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import { TouchableHighlight } from 'react-native-gesture-handler';

interface Props {
    title: string;
    subtitle: string;
    image: ImageSourcePropType;
    onPress?: () => void;
    renderRightActions?: (progressAnimatedValue: any, dragAnimatedValue: any, swipeable: Swipeable) => ReactNode
}

export default function ListItem({ title, subtitle, image, onPress, renderRightActions }: Props) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.white}>
                <View style={styles.container}>
                    <Image source={image} style={styles.image} />
                    <View>
                        <AppText style={styles.title} text={title} />
                        <AppText style={styles.subtitle} text={subtitle} />
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: "500"
    },
    subtitle: {
        color: colors.lightGrey
    }
})