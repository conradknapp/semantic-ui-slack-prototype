import React from "react";
import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";

const options = [
  {
    key: "today",
    text: "today",
    value: "today",
    content: "Today"
  },
  {
    key: "this week",
    text: "this week",
    value: "this week",
    content: "This Week"
  },
  {
    key: "this month",
    text: "this month",
    value: "this month",
    content: "This Month"
  }
];

const CurrentUser = () => (
  <Segment inverted style={{ backgroundColor: "#4c3c4c" }}>
    <Menu.Header as="h2">
      DevChat
      <Dropdown inline header="DevChat" options={options} defaultValue={""} />
      <Icon name="bell outline" />
    </Menu.Header>
    <div style={{ color: "white", opacity: 0.7 }}>
      <Icon name="circle" color="green" />
      <span>Reed Barger</span>
    </div>
  </Segment>
);

export default CurrentUser;
