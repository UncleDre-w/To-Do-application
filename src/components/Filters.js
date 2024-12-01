import React from 'react'

const Filters = ({ handleShowCompleted, handleShowActive, handleShowAll, filterState }) => {
    return (
        <section>
            <div className='container filters'>
                <p 
                    style={{color: filterState === "All" && 'hsl(220, 98%, 61%)'}}
                    onClick={handleShowAll}>All</p>
                <p 
                    style={{color: filterState === "Active" && 'hsl(220, 98%, 61%)'}}
                    onClick={handleShowActive}>Active</p>
                <p 
                    style={{color: filterState === "Completed" && 'hsl(220, 98%, 61%)'}}
                    onClick={handleShowCompleted}>Completed</p>
            </div>

            <section className='reorder'>
                Drag and drop to reorder list
            </section>
        </section>
    )
}

export default Filters