import React from 'react';

import { ToDoItem } from "../ToDoItem/ToDoItem";
import './ToDoList.css';

export interface IToDoItems {
    label: string;
    done: boolean;
    important: boolean;
    id: number;
}

interface IProps {
    toDoItems: IToDoItems[];
    onDeleteHandler: (arg0: number) => void;
    onImportantHandler: (arg0: number) => void;
    onDoneHandler: (arg0: number) => void;
    status: string;
    searchText: string;
}

class ToDoList extends React.Component<IProps> {

    render() {
        return (
            <ul className='todolist'>
                {this.renderToDoItems()}
            </ul>
        );
    }

    renderToDoItems = () => {
        const {
            toDoItems,
            onDeleteHandler,
            onImportantHandler,
            onDoneHandler,
            status,
            searchText
        } = this.props;

        let newFilteredArray = [];

        switch (status) {
            case 'Active':
                newFilteredArray = toDoItems.filter((item) => !item.done);
                break;
            case 'Done':
                newFilteredArray = toDoItems.filter((item) => item.done);
                break;
            case 'All':
            default:
                newFilteredArray = toDoItems;
        }

        switch (searchText) {
            case '':
                break;
            default: {
                const reg = new RegExp(searchText, 'i');
                newFilteredArray = newFilteredArray.filter((item) => reg.test(item.label));
            }
        }

        return newFilteredArray.map(({label, id, done, important}) =>
            <li key={label + id}>
                <ToDoItem
                    label={label}
                    onDeleteHandler={onDeleteHandler}
                    onDoneHandler={onDoneHandler}
                    onImportantHandler={onImportantHandler}
                    done={done}
                    important={important}
                    id={id}
                />
            </li>
        );
    }
}

export { ToDoList };