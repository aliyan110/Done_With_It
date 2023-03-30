import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Listing from "../components/ListComponents/Listing";
import ListItemDeleteAction from "../components/ListComponents/listItemDeleteAction";
import ListItemSeperator from "../components/ListComponents/ListItemSeperator";
import Screen from "../components/Screen";

initialMessages = [
  {
    id: 1,
    title:
      "This is a very long title to test the working of our list item trunction",
    description:
      "the check if the description id truncated in three lines we need to eneter a very long text so that we can be saure that our code is working properly and i think this much of the text is enough",
    image: require("../assets/user.png")
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/user.png")
  }
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const HandleDelete = message => {
    const newMessages = messages.filter(m => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={messages => messages.id.toString()}
        renderItem={({ item }) =>
          <Listing
            title={item.title}
            subtitle={item.description}
            photo={item.image}
            leftIconVisibility={true}
            onPress={() => null}
            renderRightActions={() =>
              <ListItemDeleteAction onPress={() => HandleDelete(item)} />}
          />}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => console.log("hi")}
      />
    </Screen>
  );
}

export default MessagesScreen;
