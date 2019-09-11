import React from 'react';

import './Search.css'

interface IProps {
    onSearchHandler: (arg0: string) => void;
}

class Search extends React.Component<IProps,{}> {
    render() {
        return (
            <form className='search_searchplace'>
                <input onChange={this.onChangeHandler} placeholder='Type to search' />
            </form>
        );
    }

    onChangeHandler = (e: any) => {
        const { onSearchHandler } = this.props;
        const text = e.target.value;
        onSearchHandler(text);
    }

}

export { Search };