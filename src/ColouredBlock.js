import React from 'react';
import ChangeColourButton from './ChangeColourButton.js'

class ColouredBlock extends React.Component{
    constructor(props){
        super(props);
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            backgroundColor: 'red'
        };
    }
    changeColor(){
        this.setState((prevState)=>{ 
        let newColor = prevState.backgroundColor === 'red' ? 'blue' : 'red' ;
        return {
            backgroundColor:newColor
        }
 
        });
    }
    render (){
        return(
            <div style ={{width:'200px', height:'200px', backgroundColor:this.state.backgroundColor}}>
                <ChangeColourButton onClick={this.changeColor} />
            </div>
        );
    }
}

export default ColouredBlock;