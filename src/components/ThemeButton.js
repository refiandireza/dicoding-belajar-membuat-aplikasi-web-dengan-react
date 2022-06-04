import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

class ThemeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: false };
    this.themeHandler = this.themeHandler.bind(this);
  }

  themeHandler() {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
    const body = document.querySelector('body');
    body.classList.toggle('theme--dark');
  }

  render() {
    return (
      <button className="btn--theme" onClick={this.themeHandler}>{this.state.isDarkMode ? <BsSunFill /> : <FaMoon />}</button>
    );
  }
}

export default ThemeButton;
