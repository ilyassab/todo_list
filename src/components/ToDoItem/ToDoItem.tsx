import React from 'react';

import './ToDoItem.css'

interface IProps {
    label: string;
    onDeleteHandler: (arg0: number) => void;
    onImportantHandler: (arg0: number) => void;
    onDoneHandler: (arg0: number) => void;
    id: number;
    done: boolean;
    important: boolean;
}

class ToDoItem extends React.Component<IProps,{}> {

    render() {

        const {
            label,
            onDeleteHandler,
            onImportantHandler,
            onDoneHandler,
            id,
            done,
            important
        } = this.props;

        let textClassNames = 'todoitem_text';
        textClassNames += important ? ' important' : '';
        textClassNames += done ? ' done' : '';

        return(
            <div className='todoitem'>
                <div className={textClassNames}>
                    <span onClick={() => onDoneHandler(id)}>{label}</span>
                </div>
                <span className='todoitem_button todoitem_trash' onClick={() => onDeleteHandler(id)}>
                    <i className="fa fa-trash-o" aria-hidden="true"/>
                </span>
                <span className='todoitem_button todoitem_important' onClick={() => onImportantHandler(id)}>
                    <i className="fa fa-exclamation" aria-hidden="true"/>
                </span>
            </div>
        );
    }
}

export { ToDoItem };