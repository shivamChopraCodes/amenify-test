export const pieces = {
    black : {
       pawn : {position: [8,9,10,11,12,13,14,15] ,img:'/images/bP.png'},
        rook: {position: [0,7], img: '/images/bR.png'},
        knight: {position: [1,6],img:'/images/bN.png'},
        bispawnhop: {position: [2,5],img:'/images/bB.png'},
        king:{position: [3],img:'/images/bK.png'},
        queen:{position: [4],img:'/images/bQ.png'},
    },
     white:      { pawn: {position: [48,49,50,51,52,53,54,55],img:'/images/wP.png'},
        rook:  {position: [56,63],img:'/images/wR.png'},
        knight: {position: [57,62],img: '/images/wN.png'},
        bishop: {position: [58,61],img: '/images/wB.png'},
        king:{position: [59],img: '/images/wK.png'},
        quuen:{position: [60],img: '/images/wQ.png'},
    }
}

export const rules = {
    king: {
        indexGap: [ -9,-8,-7,-1,1,7,8,9 ],
    }
}