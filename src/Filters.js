import React from 'react';

class Filters extends React.Component{
    render(){
        return(
            <form>
                <input type = 'text' placeholder ='search...'/>
                <p>
                    <label>
                        <input type= 'checkbox'/>
                        &nbsp;
                        Only show products in stock
                    </label>
                </p>
            </form>
        );
    };
}

export default Filters;