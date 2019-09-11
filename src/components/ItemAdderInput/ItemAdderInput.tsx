import * as React from 'react';

import './ItemAdderInput.css'

interface IProps {
    onAddTextHandler: (arg0: any) => void;
}

class ItemAdderInput extends React.Component<IProps,{}> {

    render() {
        return (
          <input className='inputadder' placeholder='What needs to be done' onChange={this.props.onAddTextHandler}/>
        );
    }
}

export { ItemAdderInput };