import React from 'react'
import Item from './Item'
import EmptyList from './EmptyList'
import ItemCount from './ItemCount'
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';


const TodoItems = ({ 
    todoList, handleClearCompleted, filteredTodoList, setFilteredTodoList, listLength, handleShowAll, handleShowActive, handleShowCompleted, filterState, darkTheme, handleChecked, handleDelete
}) => {

    const onDragEnd = (event) => {
        const {active, over} = event

        if (active.id === over.id) return

        setFilteredTodoList(filteredTodoList => {
            const oldIndex = filteredTodoList.findIndex(item => item.id === active.id);
            const newIndex = filteredTodoList.findIndex(item => item.id === over.id);

            return arrayMove(filteredTodoList, oldIndex, newIndex)
        })
    }
    return (
        <section 
            className='lists'
            style={{boxShadow: '0 0 2rem rgba(0, 0, 0, 0.2', backgroundColor: !darkTheme && 'white'}}
        >
            
            <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                <SortableContext items={filteredTodoList} strategy={verticalListSortingStrategy}>
                    {filteredTodoList.map(item => (
                        <Item 
                            item={item} 
                            key={item.id} 
                            handleChecked={handleChecked} 
                            handleDelete={handleDelete} 
                            darkTheme={darkTheme} 
                        />                     
                    ))}
                </SortableContext>
            </DndContext>

            <EmptyList darkTheme={darkTheme} filteredTodoList={filteredTodoList} />

            <ItemCount 
                todoList={todoList} 
                handleClearCompleted={handleClearCompleted}
                listLength={listLength}
                filterState={filterState}
                handleShowAll={handleShowAll}
                handleShowActive={handleShowActive}
                handleShowCompleted={handleShowCompleted}
                darkTheme={darkTheme}
            />
        </section>
    )
}

export default TodoItems