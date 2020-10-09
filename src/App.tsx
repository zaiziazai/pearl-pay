import {
  PrimaryButton,
  CommandBar,
  Spinner,
} from "@fluentui/react";
import React, { RefObject } from "react";
import Section, { heading } from "./common/Section/Section";
import "./App.scss";
import Profile from "./components/Profile/Profile";
import CustomCard from "./components/Card/Card";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./common/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import { connect } from "react-redux";
import { IProfile, IQoutes } from "./api/model";
import { status } from "./reducers/profileReducers";
import { RootState } from "./reducers";
import { getProfiles } from "./actions/profileActions";
import { Dispatch } from "redux";
import { getQoutes } from "./actions/qoutesActions";
import { toast, ToastContainer } from "react-toastify";

export interface StateProps {
  profiles: IProfile[];
  profilesStatus?: status;
  profilesErrorMessage?: string;
  qoutes: IQoutes[];
  qoutesStatus?: status;
  qoutesErrorMessage?: string;
}

export interface DispatchProps {
  getProfiles: () => void;
  getQoutes: () => void;
}

export interface OwnProps {}

export type AppProps = OwnProps & StateProps & DispatchProps;

export interface AppState {
  openContactUsModal: boolean;
}
export class App extends React.Component<AppProps, AppState> {
  homeRef: RefObject<HTMLDivElement> = React.createRef();
  profiles: RefObject<HTMLDivElement> = React.createRef();
  qoutes: RefObject<HTMLDivElement> = React.createRef();
  signUp: RefObject<HTMLDivElement> = React.createRef();

  constructor(props: AppProps) {
    super(props);
    this.state = {
      openContactUsModal: false,
    };
  }
  componentDidMount() {
    this.props.getProfiles();
    this.props.getQoutes();
  }
  componentDidUpdate(nextProps: AppProps) {
    if (
      nextProps.profilesErrorMessage &&
      nextProps.profilesStatus === status.FAILED
    )
      toast.error(nextProps.profilesErrorMessage);
    if (
      nextProps.qoutesErrorMessage &&
      nextProps.qoutesStatus === status.FAILED
    )
      toast.error(nextProps.qoutesErrorMessage);
  }

  render() {
    return (
      <div>
        {this.state.openContactUsModal && (
          <ContactUs
            onDismiss={() =>
              this.setState({
                openContactUsModal: !this.state.openContactUsModal,
              })
            }
            onSubmit={(email) => {
              toast.success("Email successfully sent!");
            }}
          />
        )}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <CommandBar
          items={[{ key: "pearlPay", text: "Pearl Pay" }]}
          farItems={[
            {
              key: "home",
              text: "Home",
              onClick: () =>
                this.homeRef.current?.scrollIntoView({ behavior: "smooth" }),
            },
            {
              key: "articles",
              text: "Profiles",
              onClick: () =>
                this.profiles.current?.scrollIntoView({ behavior: "smooth" }),
            },
            {
              key: "aboutUs",
              text: "Qoutes",
              onClick: () =>
                this.qoutes.current?.scrollIntoView({ behavior: "smooth" }),
            },
            {
              key: "contactUs",
              text: "Sign Up",
              onClick: () =>
                this.signUp.current?.scrollIntoView({ behavior: "smooth" }),
            },
          ]}
        />
        <Section
          headLine="This is The Main Headline For The Document"
          headingType={heading.MAIN}
          ref={this.homeRef}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            provident aliquid quaerat qui sapiente, aspernatur dicta? Ex rerum
            animi, soluta aut quod, esse provident culpa eveniet alias accusamus
            ut expedita. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolorem provident aliquid quaerat qui sapiente, aspernatur
            dicta? Ex rerum animi, soluta aut quod, esse provident culpa eveniet
            alias accusamus ut expedita. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolorem provident aliquid quaerat qui sapiente,
            aspernatur dicta? Ex rerum animi, soluta aut quod, esse provident
            culpa eveniet alias accusamus ut expedita. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Dolorem provident aliquid quaerat
            qui sapiente, aspernatur dicta? Ex rerum animi, soluta aut quod,
            esse provident culpa eveniet alias accusamus ut expedita.
          </p>

          <div className="ms-Grid">
            <div className="ms-Grid-row">
              <PrimaryButton
                text="Contact us"
                className="ms-Grid-col ms-sm12 ms-md12 ms-lg4"
                styles={{
                  root: {
                    height: 50,
                  },
                }}
                onClick={() => this.setState({ openContactUsModal: true })}
              />
            </div>
          </div>
        </Section>
        <Section
          headLine="A Major Heading For this Area Goes Right Here"
          headingType={heading.MAJOR}
          ref={this.profiles}
        >
          <div className="ms-Grid">
            <div className="ms-Grid-row">
              {this.props.profilesStatus === status.LOADING && (
                <Spinner label="Fetching Profiles" />
              )}
              {this.props.profilesStatus === status.SUCCESS &&
                this.props.profiles.map((profile, key) => (
                  <Profile
                    name={profile.name}
                    birthdate={profile.birthdate}
                    position={profile.position}
                    aboutMe={profile.aboutMe}
                    className="ms-Grid-col ms-sm12 ms-md12 ms-lg4"
                  />
                ))}
            </div>
          </div>
        </Section>
        <Section
          headLine="This is A Heading For This Section"
          headingType={heading.STANDARD}
          ref={this.qoutes}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            deserunt tempora laborum repellat earum omnis aperiam sed nemo
            facilis quod asperiores fuga dolores similique ducimus eius
            cupiditate id nobis eos!
          </p>
          <div className="ms-Grid">
            <div className="ms-Grid-row">
              {this.props.qoutesStatus === status.LOADING && (
                <Spinner label="Fetching Qoutes" />
              )}
              {this.props.qoutesStatus === status.SUCCESS &&
                this.props.qoutes.map((qoute, key) => (
                  <CustomCard
                    author={qoute.author}
                    qoute={qoute.qoute}
                    className="ms-Grid-col ms-sm12 ms-md6 ms-lg3"
                  />
                ))}
            </div>
          </div>
        </Section>
        <Section
          headLine="Sign Up for Email Notifications"
          headingType={heading.STANDARD}
          ref={this.signUp}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            deserunt tempora laborum repellat earum omnis aperiam sed nemo
            facilis quod asperiores fuga dolores similique ducimus eius
            cupiditate id nobis eos!
          </p>
          <SignUp
            onSubmit={(email) => {
              toast.success(email + " is now subscribed to our notifications");
            }}
          />
        </Section>
        <Footer
          socialMedias={[
            {
              link: "https://www.facebook.com",
              text: "Facebook",
            },
            {
              link: "https://www.instagram.com",
              text: "Instagram",
            },
            {
              link: "https://www.twitter.com",
              text: "Twitter",
            },
            {
              link: "https://www.youtube.com",
              text: "Youtube",
            },
            {
              link: "https://www.gmail.com",
              text: "Gmail",
            },
          ]}
        />
      </div>
    );
  }
}
const mapStateToProps = (state: RootState): StateProps => ({
  profiles: state.profiles.profiles,
  profilesStatus: state.profiles.status,
  qoutes: state.qoutes.qoutes,
  qoutesStatus: state.qoutes.status,
  qoutesErrorMessage: state.qoutes.errorMessage,
  profilesErrorMessage: state.profiles.errorMessage,
});
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  getProfiles: () => getProfiles(dispatch),
  getQoutes: () => getQoutes(dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
