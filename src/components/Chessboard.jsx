import "./Chessboard.css"

import React, { useState } from "react";

import {Cell} from "./Cell"

export const Chessboard = ({chessMap}) =>{

    const [isClicked, setIsClicked] = useState(false);


    if(!chessMap){
        // 0 for empty space
        // 1 for white pawn
        // 2 for white horse
        // 3 for white bishop
        // 4 for white rook
        // 5 for white queen
        // 6 for white king
        
        // 7 for black pawn
        // 8 for black horse
        // 9 for black bishop
        // 10 for black rook
        // 11 for black queen
        // 12 for black king
        chessMap =[
            [10,8,9,11,12,9,8,10],
            [7,7,7,7,7,7,7,7],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [1,1,1,1,1,1,1,1],
            [4,2,3,5,6,3,2,4]
        ];
    }



    return <>
    

    <div className="chessboard">
        {chessMap.map( (row, i) => {
            return row.map( (cellState, j) => {
                let tempC;
                if( (i + j)%2 == 0 ){
                    tempC = "white";
                }else{
                    tempC = "black";
                }
                return <Cell key={i+j} color={tempC} state={cellState} dude={setIsClicked} dudeState={isClicked}/>
            })
        })} 
    </div>

    </>
}