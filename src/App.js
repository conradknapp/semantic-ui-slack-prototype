import React, { Component } from "react";
import "./App.css";

import { Grid } from "semantic-ui-react";

import SidePanel from "./components/SidePanel/SidePanel";
import ColorPanel from "./components/ColorPanel/ColorPanel";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import Messages from "./components/Messages/Messages";
import MetaPanel from "./components/MetaPanel/MetaPanel";

class App extends Component {
  render() {
    return (
      <Grid columns={2}>
        <ColorPanel />
        <SidePanel />
        <Grid.Column style={{ marginLeft: 320 }}>
          <ChatHeader />
          <Messages />
        </Grid.Column>
        <Grid.Column width={3}>
          <MetaPanel />
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
