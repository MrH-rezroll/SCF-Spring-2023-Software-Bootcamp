import React from 'react';

export default class ColorPickExample extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bgColor: 'green',
            possibleBGColor: 'green'
        }
        this.toggleBGColor = this.toggleBGColor.bind(this);
        this.updateBGColor = this.updateBGColor.bind(this);
    }

    toggleBGColor(){
        /*
        if(this.state.bgColor === 'green'){
            this.setState({bgColor: 'yellow'});
        }
        else {
            this.setState({bgColor: 'green'});
        }*/
        this.setState(
            {
                bgColor: this.state.possibleBGColor
            }
        );
    }

    updateBGColor(event){
        event.preventDefault();
        this.setState(
            {
                possibleBGColor: event.target.value
            }
        );
    }

    render(){
        return(
            <div data-testid="background" style={{background: this.state.bgColor}}>
                <h1>Background Color Changer</h1>
                <input label="color" onChange={this.updateBGColor} type="text" /><br />
                <button onClick={this.toggleBGColor}>Toggle Color</button>
            </div>
        );
    }
}