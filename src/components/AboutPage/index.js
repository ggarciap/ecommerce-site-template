import React, { Component } from 'react';
import './styles.sass';

class AboutPage extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <div className="loginWrapper">
        <h3 className="loginHeading text-center">About Us</h3>

      </div>
    );
  }
}

export default AboutPage;
