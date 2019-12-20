import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import FeatureImage1 from '../../images/feat1.png';
import FeatureImage2 from '../../images/feat2.png';
import FeatureImage3 from '../../images/feat3.png';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <Header />
      <div className="hero-section">
        <h1>
          Safe Push is a simple and effective way to alert your estate
          administrators of the dangers in your environment
        </h1>
        <Link to="/auth" className="get-started">
          Get Started
        </Link>
      </div>

      <div className="features">
        <h2> Features </h2>
        <div className="feature-section">
          <div className="feature">
            <div className="feature-right">
              <h3>Safeguard your home</h3>
              <p>
                Safe push makes it easier to safeguard your homes by alerting
                the estate administrators with the push of a button
              </p>
            </div>
            <div className="feature-left">
              <img src={FeatureImage1} alt="safeguard your home" />
            </div>
          </div>

          <div className="feature">
            <div className="feature-right" id="left-mobile">
              <img src={FeatureImage2} alt="Easy to Integrate" />
            </div>
            <div className="feature-left">
              <h3>Easy to Integrate</h3>
              <p>
                You can integrate Safepush with your existing systems by making
                use of our vast microservice architecture
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-right">
              <h3>Get updates in realtime</h3>
              <p>
                We value user safety so we make sure alert gets to
                administrators as quick as possible
              </p>
            </div>
            <div className="feature-left">
              <img src={FeatureImage3} alt="Get updates in realtime" />
            </div>
          </div>
        </div>
      </div>
      <footer> Built for NaijaHacks</footer>
    </div>
  );
};

export default Landing;