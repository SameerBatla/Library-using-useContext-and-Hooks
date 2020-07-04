import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLightTheme: false,
      light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
      dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
    };
  }

  toggleTheme = () => {
    this.setState({
      isLightTheme: !this.state.isLightTheme,
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={{ ...this.state,toggleTheme:this.toggleTheme }}>
          {this.props.children}
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default ThemeContextProvider;
