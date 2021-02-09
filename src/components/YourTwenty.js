import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import SettingsModal from './SettingsModal';
import PlayingModal from './PlayingModal';
import YearSlider from './YearSlider';
import Axios from 'axios';

const title = "EighTunes"; //bucketzz
const subTitle = "a jukebox app";
const name = "Zoltán Jármy"
const serverIP = "18.184.135.174";

export default class YourTwenty extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
        this.openSettings = this.openSettings.bind(this);
        this.closeSettings = this.closeSettings.bind(this);
        this.rndTwenty = this.rndTwenty.bind(this);
        this.topTwenty = this.topTwenty.bind(this);
        this.bandAll = this.bandAll.bind(this);
        this.state = {
            options: props.options,
            selectedOption: undefined,
            settingsOpen: undefined,
            url: undefined,
            list: [],
            year: "1955"
        };
    }

    rndTwenty(year){
        const url = `http://${serverIP}:9000/api/songs/rnd/${year}`;
        //const url = "http://localhost:9000/api/songs/rnd/" + year;
        
        Axios.get(url)
            .then((response) => {
                this.setState(() => {
                    return {
                        
                        list: response.data
                    }
                });
            })
            .catch((error) =>{
                console.log(error);
            })

    };

    topTwenty(year){
        const url = `http://${serverIP}:9000/api/songs/top/${year}`;
        //const url = "http://localhost:9000/api/songs/rnd/" + year;
        Axios.get(url)
            .then((response) => {
                this.setState(() => {
                    return {
                        
                        list: response.data
                    }
                });
            })
            .catch((error) =>{
                console.log(error);
            })

    };

    bandAll(name){
        const url = `http://${serverIP}:9000/api/bands/${name}`;
        //const url = "http://localhost:9000/api/bands/" + name;
        
        Axios.get(url)
            .then((response) => {
                this.setState(() => {
                    return {
                        
                        list: response.data
                    }
                });
            })
            .catch((error) =>{
                console.log(error);
            })

    };

    componentDidMount() {
        try {
            if (localStorage.getItem("savedOptions") !== null) {
                this.setState(() => {
                    return {
                        options: JSON.parse(localStorage.getItem("savedOptions"))
                    };
                });
            }
        } catch (e) {}
        this.rndTwenty(this.state.year);
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length){
            const savedOption = JSON.stringify(this.state.options);
            localStorage.setItem("savedOptions", savedOption); 
        }
    }

    componentWillUnmount() {
        console.log("Component will removed");
    }

    handleClearSelectedOption() {
        this.setState(() => {
            return {
                selectedOption: false
            }
        });
    }

    closeSettings() {
        this.setState(() => {
            return {
                settingsOpen: false
            }
        });
    }

    handlePick(currentUrl) {
        this.setState(() => {
            return {
                url: currentUrl
            }
        });
        
        this.setState(() => {
            return {
                selectedOption: true,
            }
        });

    }

    openSettings() {
                
        this.setState(() => {
            return {
                settingsOpen: true,
            }
        });

    }

    render(){
        return(
            <div className="body-div">
                <div className="head">
                    <Header title={title} subTitle={subTitle}/>
                    <YearSlider reqSong={this.rndTwenty} openSettings={this.openSettings}></YearSlider>
                    <div className="gap">
                    </div>
                </div>
                <div className="container">
                    {
                        this.state.list.map((song, index) => <Button band={song[3]} title={song[2]} handlePick={this.handlePick} bandAll={this.bandAll}key={index}/>)
                    }
                </div>
                <PlayingModal url={this.state.url} selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
                <SettingsModal selectedOption={this.state.settingsOpen} handleClearSelectedOption={this.closeSettings}/>
                <div className="footer">
                    <Footer name={name} subTitle={subTitle}/>
                </div>    
            </div>
        );
    }
}

YourTwenty.defaultProps = {
    options: []
};

