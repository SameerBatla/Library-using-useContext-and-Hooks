import React, { createContext, Component } from 'react';

export const AuthContext = createContext();

export class AuthContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
    };
  }
  toggleAuth = () => {
    this.setState({
      isAuthenticated: !this.state.isAuthenticated,
    });
  };

  render() {
    return (
      <div>
        <AuthContext.Provider
          value={{ ...this.state, toggleAuth: this.toggleAuth }}
        >
          {this.props.children}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default AuthContextProvider;
