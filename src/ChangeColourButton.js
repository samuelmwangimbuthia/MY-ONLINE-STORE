import React from 'react';

class ChangeColourButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.onClick();
    }
    render (){
        return(
            <button onClick={this.handleClick}>Change the colour</button>
        );
    }
}

export default ChangeColourButton;