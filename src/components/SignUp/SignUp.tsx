import { TextField, PrimaryButton, Stack } from "@fluentui/react";
import React from "react";
import "./SignUp.scss";

export interface SignUpProps {
  onSubmit: (email: string) => void;
}

export interface SignUpState {
  email: string;
  disabled: boolean;
}

export default class SignUp extends React.Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props);
    this.state = {
      disabled: true,
      email: "",
    };
  }

  render() {
    return (
      <Stack horizontalAlign="center" className="signUp">
        <div className="container">
          <TextField
            placeholder="example@email.com"
            className="email"
            onChange={(e, value) => {
              this.setState(
                {
                  email: value ? value : "",
                },
                this.onValidate
              );
            }}
            value={this.state.email}
          />
          <PrimaryButton
            text="Sign Up"
            className="signUpButton"
            onClick={() => {
              this.props.onSubmit(this.state.email);
              this.setState({ email: "" });
            }}
            disabled={this.state.disabled}
          />
        </div>
      </Stack>
    );
  }
  onValidate = () => {
    if (this.state.email && this.state.email.length > 0)
      this.setState({ disabled: false });
    else this.setState({ disabled: true });
  };
}
