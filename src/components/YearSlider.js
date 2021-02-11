import React from 'react';
import { faSyncAlt, faCog, faListOl, faSortNumericDown, faRandom, faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function show_value(x)
{
 document.getElementById("year-slider").innerHTML = x;
}

class YearSlider extends React.Component {
    constructor(props) {
        super(props);
        this.refreshValue = this.refreshValue.bind(this);
        this.changeYearRnd = this.changeYearRnd.bind(this);
        this.changeYearTop = this.changeYearTop.bind(this);
        this.openSettings = this.openSettings.bind(this);
        this.nextYear = this.nextYear.bind(this);
        this.prevYear = this.prevYear.bind(this);
        this.state = {
            value: 1955
        };
    }

    changeYearRnd() {
        this.props.reqSong(this.state.value,"rnd");
    }

    changeYearTop() {
        this.props.reqSong(this.state.value,"top");
    }

    nextYear() {
        this.setState((prevState) => {
            const increment = prevState.value < 2020 ? 1 : 0;
            return {
                value: prevState.value + increment
            }
        });
    }

    prevYear() {
        this.setState((prevState) => {
            const decrement = prevState.value > 1955 ? 1 : 0;
            return {
                value: prevState.value - decrement
            }
        });
    }

    refreshValue(e) {
        this.setState(() => {
            return {
                value: Number(e.target.value)
            }
        });
    }

    openSettings() {
        this.props.openSettings();
    }

    render() {
        return (
            <>
                <div className="label-div">
                    <div className="slider-label-div">
                        <button className="year-button" onClick={this.prevYear}><FontAwesomeIcon icon={faCaretLeft} /></button>
                        <label className="slider-label" htmlFor="slider">from {this.state.value}</label>
                        <button className="year-button" onClick={this.nextYear}><FontAwesomeIcon icon={faCaretRight} /></button>
                    </div>
                    <div className="empty">
                    </div>
                </div>
                <div className="slider-div">
                    <div className="sliderdiv">
                        <input id="slider" type="range" onChange={this.refreshValue} min="1955" max="2020" step="1" value={this.state.value}></input>
                    </div>
                    <div className="slider-button-div">
                        <button className="slider-button" onClick={this.changeYearRnd}><FontAwesomeIcon icon={faRandom} /></button>
                        <button className="slider-button" onClick={this.changeYearTop}><FontAwesomeIcon icon={faSortNumericDown} /></button>
                    </div>
                </div>
            </>
        )
    }
}

export default YearSlider;