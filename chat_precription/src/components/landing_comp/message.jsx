import React from 'react'
function Message(props) {
    return (
        <>
            <div className={`${props.index % 2 === 1 ? 'chat chat-start ml-2 w-3/4' : 'chat chat-end mt-2 ml-2'}`}>
                {props.image && <img src={props.image} alt="image" className="w-2/3 h-3/6" />}
                <div className='chat-bubble whitespace-normal'>{props.message}</div>
            </div>
        </>
    );
}

export default Message;
