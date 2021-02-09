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

    // startPlay() {
    //     const key = "AIzaSyCLJ_vMWVIwhV4WA055M8raEwJ2HJaSX7c"
    //     const staticUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&fields=items/id/videoId&key=";
    //     const band = this.props.band.replaceAll(' ', '%20');
    //     const title = this.props.title.replaceAll(' ', '%20');
    //     const keywords = `${band}%20${title}`;
    //     const reqUrl = staticUrl + key + "&q=" + keywords;
    //     Axios.get(reqUrl)
    //         .then((response) => {
    //             const respUrl = response.data.items[0].id.videoId;
    //             this.props.handlePick("https://www.youtube.com/embed/" + respUrl);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }

    selectBand(e) {
        this.props.bandAll(e.target.innerText);
    }

    render(){
        return (
            <div className="big-button">
                <div className="button-text-div">
                    <p className="button-band" onClick={this.selectBand}>{this.props.band}</p>
                    <p className="button-title">{this.props.title}</p>
                </div>
                <button className="play-button" onClick={this.startPlay} disabled={!this.props.title}><FontAwesomeIcon icon={faPlay} /></button>
            </div>
        )
    }
}
