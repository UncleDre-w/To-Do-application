import React from 'react'
import DesktopFilters from './DesktopFilters'

const ItemCount = ({ 
    handleClearCompleted, listLength, handleShowAll, handleShowActive, handleShowCompleted, darkTheme }) => {
    return (
        <div className='container textbox bottom' style={{ backgroundColor: !darkTheme && 'white' }}>
            <p className='items-count'>
                {listLength && listLength} Item{listLength !== 1 && 's'}
            </p>
            
            <DesktopFilters 
                handleShowActive={handleShowActive}
                handleShowAll={handleShowAll}
                handleShowCompleted={handleShowCompleted}
            />

            <button className='clear' onClick={handleClearCompleted}>
                Clear Completed
            </button>
        </div>
    )
}

export default ItemCount