import React from 'react';

import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import Icon from "./app/components/Icon";

export default function App() {
  return (
    <Screen>
      <ListItem title="My title" subTitle={"My subtitle"} ImageComponent={<Icon name="email" />} />
    </Screen>
  )
}

