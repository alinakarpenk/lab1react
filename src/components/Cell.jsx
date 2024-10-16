import './Cell.css'

import whitePawn from "../assets/white_pawn.png"
import whiteHorse from "../assets/white_horse.png"
import whiteBishop from "../assets/white_bishop.png"
import whiteRook from "../assets/white_rook.png"
import whiteQueen from "../assets/white_queen.png"
import whiteKing from "../assets/white_king.png"

import blackPawn from "../assets/black_pawn.png"
import blackHorse from "../assets/black_horse.png"
import blackBishop from "../assets/black_bishop.png"
import blackRook from "../assets/black_rook.png"
import blackQueen from "../assets/black_queen.png"
import blackKing from "../assets/black_king.png"
import { useState } from 'react'

export const Cell = ({color, state, dude, dudeState}) => {

    const [cellColor, setCellColor] = useState(color);


    let pieces = [
        null, whitePawn, whiteHorse, whiteBishop, whiteRook, whiteQueen, whiteKing,
        blackPawn, blackHorse, blackBishop, blackRook, blackQueen, blackKing,
    ]

    const handleClick = () => {
        if(cellColor == "clicked"){
            dude(false);
            setCellColor(color);
        }else if(!dudeState){
            dude(true);
            setCellColor("clicked");
        }
    } 



// color is either black or white
    return <div className={cellColor + " cell"} onClick={handleClick}>
        <img src={pieces[state]}/> 
    </div>
}