import React, { useState } from 'react'

const DesktopFilters = ({
    handleShowActive, handleShowAll, handleShowCompleted
}) => {
    const [filterState, setFilterState] = useState('All');
    return (
        <>
            <p 
                className='desktop-filters'

                style={{color: filterState === "All" && 'hsl(220, 98%, 61%)'}}
                onClick={() => {
                    handleShowAll()
                    setFilterState('All')
                }}>All</p>
            <p 
                className='desktop-filters'
                style={{color: filterState === "Active" && 'hsl(220, 98%, 61%)'}}
                onClick={() => {
                    handleShowActive()
                    setFilterState('Active')
                }}>Active</p>
            <p 
                className='desktop-filters'
                style={{color: filterState === "Completed" && 'hsl(220, 98%, 61%)'}}
                onClick={() => {
                    handleShowCompleted()
                    setFilterState('Completed')
                }}>Completed</p>
        </>
    )
}

export default DesktopFilters