import React from 'react';
import { faSyncAlt, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function show_value(x)
{
 document.getElementById("year-slider").innerHTML=x;
}

class YearSlider extends React.Component {
    constructor(props) {
        super(props);
        this.refreshValue = this.refreshValue.bind(this);
        this.changeYear = this.changeYear.bind(this);
        this.openSettings = this.openSettings.bind(this);
        this.state = {
            value: 1955
        };
    }

    changeYear() {
        this.props.reqSong(this.state.value);
    }

    refreshValue(e) {
        this.setState(() => {
            return {
                value: e.target.value
            }
        });
        
    }

    openSettings() {
        this.props.openSettings();
    }

    render() {
        return (
            <>
                <label className="slider-label" htmlFor="slider">from {this.state.value}</label>
                <div className="slider-div">
                    <input id="slider" type="range" onChange={this.refreshValue} min="1955" max="2020" step="1"></input>
                    <button className="slider-button" onClick={this.changeYear}><FontAwesomeIcon icon={faSyncAlt} /></button>
                    <button className="slider-button" onClick={this.openSettings}><FontAwesomeIcon icon={faCog} /></button>
                </div>
            </>
        )
    }
}

export default YearSlider;