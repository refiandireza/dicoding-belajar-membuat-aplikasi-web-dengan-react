import React from 'react';
import { FaAngleUp } from 'react-icons/fa';

class ScrollTop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  render() {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 100) {
        this.setState({
          isVisible: true,
        });
      } else if (scrolled <= 100) {
        this.setState({
          isVisible: false,
        });
      }
    };

    window.addEventListener('scroll', toggleVisible);

    return (
      <button className={`btn--scroll-top ${this.state.isVisible ? 'visible' : ''}`} onClick={this.onClickHandler}>
        <FaAngleUp />
      </button>
    );
  }
}

export default ScrollTop;
