import React from "react";
import { Segment, Button, Icon, Form, TextArea } from "semantic-ui-react";

// import FileModal from "./FileModal";
import ProgressBar from "./ProgressBar";

class MessageForm extends React.Component {
  render() {
    return (
      <Segment className="messages__form">
        <Form>
          <TextArea
            ref="message"
            name="message"
            rows={2}
            autoHeight
            placeholder="Write your message"
          />
          <Button.Group icon>
            <Button
              primary
              content="Add Reply"
              labelPosition="left"
              icon="edit"
            />
            <Button icon>
              <Icon name="cloud upload" /> Upload Media
            </Button>
          </Button.Group>
        </Form>
        {/* <FileModal
          modalOpen={modalOpen}
          closeFileModal={this.closeFileModal}
          uploadFile={this.uploadFile}
        /> */}
        <ProgressBar
          // uploadState={uploadState}
          percentUploaded={"75"}
        />
      </Segment>
    );
  }
}

export default MessageForm;
