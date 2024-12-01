import React from 'react';
import checkMark from '../images/icon-check.svg';
import remove from '../images/icon-cross.svg';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Item = ({ item, handleDelete, handleChecked, darkTheme }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: item.id,
    });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        zIndex: isDragging ? 1 : 'auto', // Set higher z-index when dragging
    };

    return (
        <div  className={`container list-item ${!darkTheme && 'white-background'}`} style={style}>

            <div onClick={() => handleChecked(item.id)}>
                <span className={`round-checkbox ${item.checked && 'is-checked'}`}>
                    <img
                        style={{ opacity: item.checked ? 1 : 0 }}
                        src={checkMark}
                        className="checkmark"
                        alt=""
                    />
                </span>
            </div>

            <div>
                <p
                    className={`
                        ${darkTheme && item.checked && 'dark-checked'}
                        ${darkTheme && !item.checked && 'dark-unchecked'}
                        ${!darkTheme && item.checked && 'light-checked'}
                        ${!darkTheme && !item.checked && 'light-unchecked'}`}
                >
                    {item.todoName}
                </p>
            </div>

            <div style={{position: "relative"}} onClick={() => handleDelete(item.id)}>
                <img src={remove} className="remove-icon" alt="" />

                <div className="drag-icon" ref={setNodeRef} {...attributes} {...listeners}>
                    <svg viewBox="0 0 20 20" width="15" height="25" fill='hsl(233, 20%, 42%)'><path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path></svg>            
                </div>
            </div>

        </div>
    );
};

export default Item;
