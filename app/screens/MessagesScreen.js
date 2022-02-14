import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native'

import Screen from '../components/Screen'
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  { id: 1, title: 'T1', description: 'D1', image: require('../assets/avatar2.jpg')},
  { id: 2, title: 'T2', description: 'D2', image: require('../assets/avatar3.jpg')}
]

function MessagesScreen() {

  const [messages, setMessages] = useState(initialMessages)

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
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;

