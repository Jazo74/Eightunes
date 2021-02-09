import React from 'react';
import Modal from 'react-modal';

const SettingsModal = (props) => (
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        ariaHideApp={false}
        contentLabel = "Selected Option"
        closeTimeoutMS={200}
        className="settingsModal"
    >
        <div className="settings-container">
            <form>
            <label className="settingsTitle" htmlFor="media">Choose your content provider</label><br></br>
            <input type="radio" id="youtube" name="mediaSource" value="youtube"></input>
            <label className="settingsLabel"  htmlFor="youtube">Youtube</label><br></br>
            <input type="radio" id="vimeo" name="mediaSource" value="vimeo"></input>
            <label className="settingsLabel"  htmlFor="vimeo">Vimeo</label><br></br>
            <input type="radio" id="spotify" name="mediaSource" value="spotify"></input>
            <label className="settingsLabel"  htmlFor="spotify">Spotify</label><br></br>
            <br></br>
            <label className="settingsTitle"  htmlFor="media">Selection of songs</label><br></br>
            <input type="radio" id="top" name="selection" value="top"></input>
            <label className="settingsLabel"  htmlFor="top">Top</label><br></br>
            <input type="radio" id="random" name="selection" value="random"></input>
            <label className="settingsLabel"  htmlFor="random">Random from the top 100</label><br></br>
            <br></br>
            <input type="checkbox" id="bandName" name="bandName" value="true"></input>
            <label className="settingsLabel"  htmlFor="bandName">Show the name of the bands/singers</label><br></br>
            </form>
        </div>
        </Modal>
);

export default SettingsModal;
