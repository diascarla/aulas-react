import React from 'react'

const Card = ({children, color, showCardColor}) => {
    return (
        <div 
        className= 'card' 
        style={{backgroundColor: color}} 
        onClick={() => showCardColor(color)}>
            {children}
        </div>
    )
}


Card.defaultProps = {
    color: 'red'
}

export default Card