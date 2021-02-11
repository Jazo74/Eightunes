import React from 'react';
import Modal from 'react-modal';
import { faHeart, faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlayingModal = (props) => (
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        ariaHideApp={false}
        contentLabel = "Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <div className="video-container">
            <iframe id="ytplayer" type="text/html" width="100%" height="100%"
            src={props.url + "?&autoplay=1"} allow="autoplay;"
            frameBorder="0">
            </iframe>
        </div>
        </Modal>
);

export default PlayingModal;

// <div className="pre-video-div">
        //     <button className="bucket-button"><FontAwesomeIcon icon={faCrown} /></button>
        //     <button className="bucket-button"><FontAwesomeIcon icon={faHeart} /></button>
        // </div>