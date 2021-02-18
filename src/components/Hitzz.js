import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import PlayingModal from './PlayingModal';
import YearSlider from './YearSlider';
import Axios from 'axios';
import { themeChanger, stopIndex} from './themes';

const title = "Hitzz";
const name = "Zoltán Jármy"
const serverIP = "18.184.135.174";


export default class Hitzz extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
        this.openSettings = this.openSettings.bind(this);
        this.closeSettings = this.closeSettings.bind(this);
        this.getSongs = this.getSongs.bind(this);
        this.bandAll = this.bandAll.bind(this);
        this.state = {
            options: props.options,
            selectedOption: undefined,
            settingsOpen: undefined,
            url: undefined,
            list: [],
            year: "1955",
            c1: "hsl(253, 80%, 31%)",
            c2: "",
            c3: "",
            c4: "",
            c1_5: "",
            c12: "",
            c17: "",
            c26: ""
        };
    }

    componentDidMount() {
            this.getSongs(this.state.year);
    }
    
    componentDidUpdate(){
        stopIndex();
        themeChanger();
    }
    
    getSongs(year, selection){
        let select = "";
        if (selection === undefined) {
            select = "rnd"
        } else {
            select = selection;
        }
        const url = `http://${serverIP}:9000/api/songs/${select}/${year}`;
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
                <div className="head grad1_2">
                    <Header title={title} themeChanger={themeChanger}/>
                    <YearSlider reqSong={this.getSongs} openSettings={this.openSettings}></YearSlider>
                    <div className="gap bc4">
                    </div>
                </div>
                <div className="container">
                    {
                        this.state.list.map((song, index) => <Button band={song[3]} title={song[2]} handlePick={this.handlePick} bandAll={this.bandAll} key={index} />)
                    }
                </div>
                <PlayingModal url={this.state.url} selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
                <div className="footer">
                    <Footer name={name}/>
                </div>    
            </div>
        );
    }
}

Hitzz.defaultProps = {
    options: []
};

// componentDidMount() {
    //     try {
    //         if (localStorage.getItem("savedOptions") !== null) {
    //             this.setState(() => {
    //                 return {
    //                     options: JSON.parse(localStorage.getItem("savedOptions"))
    //                 };
    //             });
    //         }
    //     } catch (e) {}
    //     this.getSongs(this.state.year);
        
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.options.length !== this.state.options.length){
    //         const savedOption = JSON.stringify(this.state.options);
    //         localStorage.setItem("savedOptions", savedOption); 
    //     }
    // }

