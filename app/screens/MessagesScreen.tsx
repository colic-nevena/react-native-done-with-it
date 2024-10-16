import React, { useState } from 'react'
import ListItem from '../components/ListItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import { MessageViewModel } from '../model/MessageViewModel'
import { FlatList } from 'react-native'

const initMessages: MessageViewModel[] = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/images/mosh.jpg")
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/images/mosh.jpg")
    }
]

export default function MessagesScreen() {
    const [messages, setMessages] = useState<MessageViewModel[]>(initMessages);
    const [refreshing, setRefreshing] = useState<boolean>(false);

    const handleDelete = (messageToDelete: MessageViewModel) => {
        const updated = messages.filter(msg => msg.id !== messageToDelete.id)
        setMessages(updated)
    }

    const handleRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            setMessages([
                {
                    id: 1,
                    title: "Updated T1",
                    description: "Updated D1",
                    image: require("../assets/images/mosh.jpg")
                },
                {
                    id: 3,
                    title: "New Message",
                    description: "New Description",
                    image: require("../assets/images/mosh.jpg")
                }
            ]);
            setRefreshing(false);
        }, 2000);
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={messages}
                    keyExtractor={message => message.id.toString()}
                    ItemSeparatorComponent={() => <ListItemSeparator />}
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    renderItem={({ item }) => <ListItem
                        renderRightActions={() =>
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        }
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        onPress={() => console.log("message selecteed lala", item)}
                    />
                    }
                />
            </SafeAreaView>
        </GestureHandlerRootView>
    )
}
