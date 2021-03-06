import React from 'react'

const left = "<"
const right = ">"

const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = props

    return(
        <div className="pagination">
            <button onClick={onLeftClick}>
                <div>{left}</div>
            </button>
            <div>{page}/{totalPages}</div>
            <button onClick={onRightClick}>
                <div>{right}</div>
            </button>
        </div>
    )
}

export default Pagination