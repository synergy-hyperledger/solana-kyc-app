import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import config from "../../../config";
import { connect } from "react-redux";
import { Container, Alert, Button } from "reactstrap";
import Widget from "../../../components/Widget";
import { loginUser, receiveToken, doInit } from "../../../actions/auth";
import jwt from "jsonwebtoken";
import microsoft from "../../../images/microsoft.png";
import { push } from "connected-react-router";
import img from "../../../images/snow-flake.png";
import axios from "axios";

class Login extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static isAuthenticated() {
    const token = localStorage.getItem("token");
    if (!config.isBackend && token) return true;
    if (!token) return;
    const date = new Date().getTime() / 1000;
    const data = jwt.decode(token);
    if (!data) return;
    return date < data.exp;
  }

  constructor(props) {
    super(props);

    this.state = {
      email: "admin@kyc.com",
      password: "ABC12345",
    };
    localStorage.setItem('pathName', 1);
    this.doLogin = this.doLogin.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
    this.microsoftLogin = this.microsoftLogin.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  doLogin(e) {
    axios.get('http://localhost:4000/getAccount/' + this.state.email)
    .then((response) => {
    console.log(response);
    localStorage.setItem('account_id', response.data.account_id);
     });
    e.preventDefault();
    this.props.dispatch(
      loginUser({ email: this.state.email, password: this.state.password })
    );
  }

  googleLogin() {
    this.props.dispatch(loginUser({ social: "google" }));
  }

  microsoftLogin() {
    this.props.dispatch(loginUser({ social: "microsoft" }));
  }

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const token = params.get("token");
    if (token) {
      this.props.dispatch(receiveToken(token));
      this.props.dispatch(doInit());
    }
  }

  signUp() {
    this.props.dispatch(push("/register"));
  }

  render() {
    return (
      <div className="auth-page">
        <div className="col-12 px-0">
          <div className="row no-gutters align-items-center">
            <div className="col pl-0">
              <img
                src={
                  "https://paytah.com/wp-content/uploads/2021/03/KYC-know-yourcustomer-scaled.jpg"
                }
                height="100%"
                width="100%"
                alt="banner"
              />
            </div>
            <div className="col-auto login__section">
              <h5 className="auth-logo">
                <img src={img} width="22" alt="logo" className="mr-2" />
                KYC Universe
              </h5>
              <Widget
                className="widget-auth mx-auto"
              >
                <p className="widget-auth-info">Use your email to sign in.</p>
                {/* <Alert className="alert-sm text-center mt-2" color="secondary">
                  For user with "admin" role use
                  <br />
                  <span className="font-weight-bold">
                    "admin@flatlogic.com / password"
                  </span>
                  <br />
                  to login!
                </Alert> */}
                <form className="mt" onSubmit={this.doLogin}>
                  {this.props.errorMessage && (
                    <Alert className="alert-sm" color="danger">
                      {this.props.errorMessage}
                    </Alert>
                  )}
                  <div className="form-group">
                    <input
                      className="form-control no-border"
                      value={this.state.email}
                      onChange={this.changeEmail}
                      type="email"
                      required
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group mb-0">
                    <input
                      className="form-control no-border"
                      value={this.state.password}
                      onChange={this.changePassword}
                      type="password"
                      required
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  {/* <Link
                    className="d-block text-right mb-3 mt-1 fs-sm"
                    to="forgot"
                  >
                    Forgot password?
                  </Link> */}
                  <Button
                    type="submit"
                    color="info"
                    className="auth-btn mb-3"
                    size="sm"
                  >
                    {this.props.isFetching ? "Loading..." : "Login"}
                  </Button>
                  {/* <p className="widget-auth-info">or sign in with</p> */}
                  {/* <div className="social-buttons">
                    <Button
                      onClick={this.googleLogin}
                      color="primary"
                      className="social-button mb-2"
                    >
                      <i className="social-icon social-google" />
                      <p className="social-text">GOOGLE</p>
                    </Button>
                    <Button
                      onClick={this.microsoftLogin}
                      color="success"
                      className="social-button"
                    >
                      <i
                        className="social-icon social-microsoft"
                        style={{ backgroundImage: `url(${microsoft})` }}
                      />
                      <p className="social-text">MICROSOFT</p>
                    </Button>
                  </div> */}
                </form>
                {/* <p className="widget-auth-info">
                  Don't have an account? Sign up now!
                </p>
                <Link className="d-block text-center" to="register">
                  Create an Account
                </Link> */}
              </Widget>
            </div>
          </div>
        </div>
        <footer className="auth-footer">
          {/* {new Date().getFullYear()} &copy; Sing App - React Admin Dashboard
          Template. By{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://flatlogic.com"
          >
            Flatlogic
          </a> */}
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
