import * as React from 'react';

import {ItemAdder} from "../ItemAdder/ItemAdder";
import {ItemAdderInput} from "../ItemAdderInput/ItemAdderInput";
import './Adder.css';

interface IProps {
    onAddItemHandler: (arg1: string) => void,
}

interface IState {
    text: string;
}

class Adder extends React.Component<IProps, IState> {

    state = {
        text: '',
    };

    render() {
        return (
            <form className='adder_footer' onSubmit={this.onSubmitHandler}>
                <ItemAdderInput onAddTextHandler={this.onAddTextHandler}/>
                <ItemAdder/>
            </form>
        );
    }

    onSubmitHandler = (e: any) => {
        e.preventDefault();
        this.props.onAddItemHandler(this.state.text);
    };

    onAddTextHandler = (e: any) => {
        const text = e.target.value;
        this.setState(() => {
            return {text: text}
        })
    };
}

export {Adder};