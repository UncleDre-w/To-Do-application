import React from 'react'

const EmptyList = ({ filteredTodoList, darkTheme }) => {
    return (
        <>
            { filteredTodoList.length === 0 && 
                <div className='container'
                    style={{
                        backgroundColor: !darkTheme && 'white'}}
                >
                    <p style={{textAlign: 'center', color: "hsl(234, 11%, 52%)"}}>
                        Nothing to see here😒😒
                    </p>
                </div> 
            }
        </>
    )
}

export default EmptyList