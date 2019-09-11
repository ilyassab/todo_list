import * as React from 'react';

import './Header.css';

interface IProps {
    todo: number;
    done: number;
}

class Header extends React.Component<IProps,{}> {

    render() {

        const { todo, done } = this.props;

        return (
            <div>
                <div className={'header_title'}>TODO List</div>
                <div className={'header_text'}>{todo} more to do, {done} done</div>
            </div>);
    }

}

export { Header };