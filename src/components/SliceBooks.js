import React from 'react'
import './SliceBooks.css';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import NextIcon from '@material-ui/icons/SkipNextRounded'

function SliceBooks() {
    return (
        <div className="sliceBooks">
            <div className="container__slice">
            <div className="previosIcon">
                <SkipPreviousIcon/>
            </div>
            <div className="books">
                <h3>Los gatos guerreros</h3>
                <img src="/images/imgTest.jpg" alt=""/>
                <h3>Erin Hunter</h3>
            </div>
            <div className="nextIcon">
                <NextIcon/>
            </div>
            </div>
        </div>
    )
}

export default SliceBooks
