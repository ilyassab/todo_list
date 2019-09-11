import * as React from 'react';

import './ItemAdder.css';

class ItemAdder extends React.Component<{},{}> {

    render() {
        return(
            <div className='itemadder'>
                <button type='submit' className='itemadder_button'>Add Item</button>
            </div>
        );
    }
}

export { ItemAdder };