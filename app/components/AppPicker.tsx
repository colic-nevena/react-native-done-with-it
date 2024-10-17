import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import defaultStyles from "../config/styles"
import AppText from './AppText';
import PickerItem from './PickerItem';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export interface PickerItemProps {
    label: string;
    value: number | string;
}

interface Props {
    icon?: any;
    placeholder: string;
    selectedItem: PickerItemProps | undefined;
    items: PickerItemProps[];
    onSelectItem: (item: PickerItemProps) => void;
}

export default function AppPicker({ icon, placeholder, items, selectedItem, onSelectItem }: Props) {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleModalToggle = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={handleModalToggle}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.lightGrey} />}

                    <AppText text={selectedItem ? selectedItem.label : placeholder} style={styles.text} />
                    <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.lightGrey} />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType='slide'>
                <Button title="Close" onPress={() => setModalVisible(false)} />

                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) =>
                        <PickerItem
                            label={item.label}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                        />}
                />
            </Modal>
        </GestureHandlerRootView>
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
    },
    text: {
        flex: 1
    }
})