import React from 'react';
import Axios from 'axios';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const serverIP = "18.184.135.174";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.startPlay = this.startPlay.bind(this);
        this.selectBand = this.selectBand.bind(this);
        this.state = {
            url: undefined
        };
    }

    componentDidUpdate() {
        const x = document.querySelectorAll('big-button');
        x.forEach(elem => {
            elem.getElementsByClassName.background = this.props.c1;
        });
    }
    startPlay() {
        const band = this.props.band;
        const title = this.props.title;
        const keywords = `${band}/${title}`;
        const url = `http://${serverIP}:9000/api/videoid/${keywords}`;
        //const url = "http://localhost:9000/api/videoid/" + keywords;
        Axios.get(url)
            .then((response) => {
                    const respUrl = response.data;
                    this.props.handlePick("https://www.youtube.com/embed/" + respUrl);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    selectBand(e) {
        this.props.bandAll(e.target.innerText);
    }

    render(){
        return (
            <div className="big-button cc3 grad12_1">
                <div className="button-text-div">
                    <p className="button-band" onClick={this.selectBand}>{this.props.band}</p>
                    <p className="button-title">{this.props.title}</p>
                </div>
                <button className="play-button cc2 bc3" onClick={this.startPlay} disabled={!this.props.title}><FontAwesomeIcon icon={faPlay} /></button>
            </div>
        )
    }
}
