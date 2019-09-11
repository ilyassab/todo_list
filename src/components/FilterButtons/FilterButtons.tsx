import React from 'react';

import './FilterButtons.css';

interface IProps {
    status: string;
    onFilterHandler: (arg0: string) => void;
}

class FilterButtons extends React.Component<IProps, {}> {

    render() {
        const { status, onFilterHandler } = this.props;
        return (
            <div className='filterbuttons_buttongroup'>
                <button
                    className={`filterbuttons_button filterbuttons_first ${status === 'All' && 'active'}`}
                    onClick={() => onFilterHandler('All')}
                >
                    All
                </button>
                <button
                    className={`filterbuttons_button ${status === 'Active' && 'active'}`}
                    onClick={() => onFilterHandler('Active')}
                >
                    Active
                </button>
                <button
                    className={`filterbuttons_button filterbuttons_third ${status === 'Done' && 'active'}`}
                    onClick={() => onFilterHandler('Done')}
                >
                    Done
                </button>
            </div>
        );
    }
}

export { FilterButtons };