import React from 'react';
import './main.scss';
import beast from '../images/beast.jpg';
import man from '../images/man.jpg';
import wizard from '../images/wizard.jpg';

const Main = () => {
  return (
    <div id="main-container">
      <div id="main-headers">
        <h1>HEADING 1</h1>
        <h2>heading 2</h2>
      </div>
      <div id="main-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio
          pellentesque diam volutpat. A lacus vestibulum sed arcu non odio
          euismod lacinia. Diam maecenas sed enim ut sem viverra aliquet eget
          sit. Enim sed faucibus turpis in eu mi bibendum. Convallis aenean et
          tortor at risus viverra adipiscing at in. Velit ut tortor pretium
          viverra. Proin fermentum leo vel orci porta non pulvinar neque. A
          iaculis at erat pellentesque adipiscing commodo elit at imperdiet.
          Cursus turpis massa tincidunt dui. Ac auctor augue mauris augue neque
          gravida in fermentum et. Ac orci phasellus egestas tellus. Neque
          volutpat ac tincidunt vitae semper quis lectus nulla. Integer enim
          neque volutpat ac tincidunt vitae semper quis. A erat nam at lectus.
        </p>
        <p>
          Morbi tincidunt augue interdum velit euismod in. Imperdiet proin
          fermentum leo vel orci porta non pulvinar. Bibendum est ultricies
          integer quis auctor elit sed vulputate mi. Id velit ut tortor pretium.
          Molestie ac feugiat sed lectus vestibulum. Sodales ut eu sem integer
          vitae. Odio tempor orci dapibus ultrices. Rhoncus aenean vel elit
          scelerisque mauris pellentesque. Ornare quam viverra orci sagittis.
          Risus at ultrices mi tempus imperdiet nulla. Enim nunc faucibus a
          pellentesque. Adipiscing commodo elit at imperdiet dui accumsan sit
          amet nulla. Scelerisque eleifend donec pretium vulputate sapien.
          Adipiscing bibendum est ultricies integer quis auctor elit sed
          vulputate. In vitae turpis massa sed elementum tempus egestas sed.
          Auctor augue mauris augue neque gravida. Massa enim nec dui nunc
          mattis enim ut. Amet massa vitae tortor condimentum lacinia quis vel
          eros. Amet luctus venenatis lectus magna fringilla urna porttitor
          rhoncus. Pulvinar etiam non quam lacus.
        </p>
        <p>
          At urna condimentum mattis pellentesque. Arcu dictum varius duis at
          consectetur. Vulputate ut pharetra sit amet. Maecenas pharetra
          convallis posuere morbi leo urna. Enim nec dui nunc mattis enim ut.
          Lorem mollis aliquam ut porttitor leo a diam. Nunc sed blandit libero
          volutpat sed cras ornare. Sodales ut etiam sit amet nisl purus in
          mollis. Elementum facilisis leo vel fringilla est ullamcorper.
          Maecenas pharetra convallis posuere morbi leo urna molestie at
          elementum. Aliquam purus sit amet luctus venenatis lectus magna
          fringilla urna.
        </p>
      </div>
      <div id="image-object-container">
        <div className="image-object">
          <div className="image-text">
            <h1>TITLE</h1>
            <h3>Description</h3>
          </div>
          <img src={man} alt="man" />
        </div>
        <div className="image-object">
          <div className="image-text">
            <h1>TITLE</h1>
            <h3>Description</h3>
          </div>
          <img src={wizard} alt="wizard" />
        </div>
        <div className="image-object">
          <div className="image-text">
            <h1>TITLE</h1>
            <h3>Description</h3>
          </div>
          <img src={beast} alt="beast" />
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
};

export default Main;
