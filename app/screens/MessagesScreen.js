import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native'

import Screen from '../components/Screen'
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
  { id: 1, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', description: 'D1', image: require('../assets/avatar2.jpg')},
  { id: 2, title: 'T2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', image: require('../assets/avatar3.jpg')}
]

function MessagesScreen() {

  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = message => {
    // supprimer le message du tableau 'messages'
    setMessages(messages.filter(m => m.id !== message.id))

    // Appeler le serveur pour supprimer le message dans le backend
  }

  return (
    <Screen>
      <FlatList
        data={ messages }
        keyExtractor={ message => message.id.toString() }
        renderItem={ ({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={ () => console.log('Message selected', item)}
            renderRightActions={ () => <ListItemDeleteAction onPress={ () => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={ () => setMessages([
          { id: 2, title: 'T2', description: 'D2', image: require('../assets/avatar3.jpg')}
        ])}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;

