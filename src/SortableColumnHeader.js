import React from 'react';
import './SortableColumnHeader.css';

class SortableColumnHeader extends React.Component{
    render(){
        return(
            <th>
                {this.props.column}
                <button className="ProductTableHeader-current">&#x25BC;</button>
                <button>&#x25BC;</button>
            </th>
        );
    }
}

export default SortableColumnHeader;