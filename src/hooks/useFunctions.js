import { useState } from 'react';

const useFunctions = () => {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todolist')) || []);
    const [filterState, setFilterState] = useState("All");

    const handleAddClick = () => {
        const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1
        setTodoList([...todoList, {todoName: todo, id, checked: false}]);
    };

    const handleDelete = (id) => {
        const newTodoList = todoList.filter((item) => item.id !== id);
        setTodoList(newTodoList);
    };

    const handleChecked = (id) => {
        const newTodoList = todoList.map(
            (item) => item.id === id ? {...item, checked: !item.checked } : item 
        );
        setTodoList(newTodoList);
    };

    const handleClearCompleted = () => {
        const newTodoList = todoList.filter((item) => !item.checked);
        setTodoList(newTodoList);
    };

    const handleShowAll = () => {
        setFilterState("All");
    };

    const handleShowActive = () => {
        setFilterState("Active");
    };

    const handleShowCompleted = () => {
        setFilterState("Completed");
    };
    
    
    return {
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
    }

}

export default useFunctions