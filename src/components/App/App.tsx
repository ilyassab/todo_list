import * as React from 'react';

import {Header} from "../Header/Header";
import {Search} from "../Search/Search";
import {FilterButtons} from "../FilterButtons/FilterButtons";
import {ToDoList} from "../ToDoList/ToDoList";
import './App.css';
import {Adder} from "../Adder/Adder";
import {IToDoItems} from "../ToDoList/ToDoList";

interface IState {
    toDoItems: IToDoItems[];
    status: string;
    searchText: string;
}

class App extends React.Component<{}, IState> {

    state = {
        toDoItems:
            [
                {label: '1 ticket', done: false, important: false, id: 1},
                {label: '2 ticket', done: false, important: false, id: 2},
                {label: '3 ticket', done: false, important: false, id: 3}
            ],
        status: 'All',
        searchText: '',
    };

    render() {

        const {toDoItems, status, searchText} = this.state;
        const doneCount = (toDoItems.filter((item) => item.done)).length;
        const todoCount = toDoItems.length - doneCount;
        return (
            <div>
                <Header
                    todo={todoCount}
                    done={doneCount}
                />
                <div className='app_body'>
                    <Search onSearchHandler={this.onSearchHandler}/>
                    <FilterButtons
                        onFilterHandler={this.onFilterHandler}
                        status={status}
                    />
                </div>
                <ToDoList
                    toDoItems={toDoItems}
                    onDeleteHandler={this.onDeleteHandler}
                    onDoneHandler={this.onDoneHandler}
                    onImportantHandler={this.onImportantHandler}
                    status={status}
                    searchText={searchText}
                />
                <Adder onAddItemHandler={this.onAddItemHandler}/>
            </div>
        );
    }

    onDeleteHandler = (id: number) => {
        this.setState(({toDoItems}) => {
            const idx = toDoItems.findIndex((item) => item.id === id);
            const newArray = [
                ...toDoItems.slice(0, idx),
                ...toDoItems.slice(idx + 1)
            ];
            return {toDoItems: newArray};
        })
    };

    onDoneHandler = (id: number) => {
        this.setState(({toDoItems}) => {
            const idx = toDoItems.findIndex((item) => item.id === id);
            let newArray = [...toDoItems];
            newArray[idx].done = !toDoItems[idx].done;
            return {toDoItems: newArray};
        })
    };

    onImportantHandler = (id: number) => {
        this.setState(({toDoItems}) => {
            const idx = toDoItems.findIndex((item) => item.id === id);
            let newArray = [...toDoItems];
            newArray[idx].important = !toDoItems[idx].important;
            return {toDoItems: newArray};
        })
    };

    onAddItemHandler = (text: string) => {
        text && this.setState(({toDoItems}) => {
            let newArray = [...toDoItems];
            newArray.push({label: text, done: false, important: false, id: toDoItems[toDoItems.length - 1].id + 1});
            return {toDoItems: newArray};
        })
    };

    onFilterHandler = (status: string) => {
        this.setState(() => {
            return {status: status};
        })
    };

    onSearchHandler = (text: string) => {
        this.setState(() => {
            return {searchText: text}
        })
    }
}

export {App};