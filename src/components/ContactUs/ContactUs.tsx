import {
  DefaultButton,
  IStackProps,
  Modal,
  PrimaryButton,
  Stack,
  TextField,
} from "@fluentui/react";
import React from "react";
import "./ContactUs.scss";

interface ContactUsProps {
  onDismiss: () => void;
  onSubmit: (emailData: {
    email?: string;
    body?: string;
    subject?: string;
  }) => void;
}

interface ContactUsState {
  disabled: boolean;
  email?: string;
  body?: string;
  subject?: string;
}
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 10 },
  styles: { root: { width: 300 } },
};

export default class ContactUs extends React.Component<
  ContactUsProps,
  ContactUsState
> {
  constructor(props: ContactUsProps) {
    super(props);
    this.state = {
      disabled: true,
      email: "",
      body: "",
      subject: "",
    };
  }

  render() {
    return (
      <Modal
        isOpen={true}
        onDismiss={this.props.onDismiss}
        className="contactUs"
      >
        <div className="container">
          <Stack {...columnProps}>
            <div className="title">Contact Us</div>
            <TextField
              label="Email:"
              placeholder="example@email.com"
              onChange={(e, value) => {
                this.setState(
                  {
                    email: value,
                  },
                  this.onValidate
                );
              }}
              value={this.state.email}
            />
            <TextField
              label="Subject"
              placeholder="Subject"
              onChange={(e, value) => {
                this.setState(
                  {
                    subject: value,
                  },
                  this.onValidate
                );
              }}
              value={this.state.subject}
            />
            <TextField
              label="Body"
              placeholder="Enter message here"
              multiline
              onChange={(e, value) => {
                this.setState(
                  {
                    body: value,
                  },
                  this.onValidate
                );
              }}
              value={this.state.body}
            />
            <PrimaryButton
              text="Submit"
              disabled={this.state.disabled}
              onClick={() => {
                this.props.onSubmit({
                  email: this.state.email,
                  body: this.state.body,
                  subject: this.state.subject,
                });
                this.props.onDismiss();
              }}
            />
            <DefaultButton text="Cancel" onClick={()=>this.props.onDismiss()}/>
          </Stack>
        </div>
      </Modal>
    );
  }
  onValidate = () => {
    if (
      this.state.subject &&
      this.state.subject.length > 0 &&
      this.state.email &&
      this.state.email.length > 0 &&
      this.state.body &&
      this.state.body.length > 0
    )
      this.setState({ disabled: false });
    else this.setState({ disabled: true });
  };
}
