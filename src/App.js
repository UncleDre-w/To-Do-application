import React, { useEffect, useState } from 'react';
import './App.css';
import BackgroundImage from './components/BackgroundImage';
import Content from './components/Content';
import useFunctions from './hooks/useFunctions';

function App() {
    const [filteredTodoList, setFilteredTodoList] = useState([]);
    const [listLength, setListLength] = useState("");
    const [darkTheme, setDarkTheme] = useState(true);

    const {
        todo,
        setTodo,
        todoList,
        filterState,
        handleAddClick,
        handleChecked,
        handleClearCompleted,
        handleDelete,
        handleShowActive,
        handleShowAll, 
        handleShowCompleted
    } = useFunctions();

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(todoList));
    }, [todoList]);

    useEffect(() => {
        filterTodoList();
    }, [todoList, filterState]);

    // To keep track of number of items
    useEffect(() => {
        setListLength(filteredTodoList.length);
    }, [filteredTodoList])

    const filterTodoList = () => {
        switch (filterState) {
            case "Active":
                setFilteredTodoList(todoList.filter(item => !item.checked));
                break;
            case "Completed":
                setFilteredTodoList(todoList.filter(item => item.checked));
                break;
            default:
                setFilteredTodoList(todoList);
                setListLength(todoList.length);
        }
    };

    return (
        <div className="App">
            <BackgroundImage darkTheme={darkTheme} />

            <div className="section-container">
                <div className='bottom-bg' style={{backgroundColor:!darkTheme && 'white'}}>
                    <Content 
                        todo={todo}
                        setTodo={setTodo}
                        todoList={todoList}
                        handleAddClick={handleAddClick}
                        handleDelete={handleDelete}
                        handleChecked={handleChecked}
                        handleClearCompleted={handleClearCompleted}
                        handleShowCompleted={handleShowCompleted}
                        handleShowActive={handleShowActive}
                        handleShowAll={handleShowAll}
                        filteredTodoList={filteredTodoList}
                        setFilteredTodoList={setFilteredTodoList}
                        filterState={filterState}
                        listLength={listLength}
                        darkTheme={darkTheme}
                        setDarkTheme={setDarkTheme}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
