import * as PIXI from 'pixi.js';
import { PuzzleGridConfig } from './PuzzelGridConfig';
import { PuzzlePiece } from './PuzzelPiece';
export class PuzzelGrid{
    constructor() {
        this.container = new PIXI.Container();
        this.container.x = window.innerWidth / 2;
        this.container.y = window.innerHeight / 2;
        this.container.sortableChildren = true;
        this.cretePuzzelPieces();
    }

    cretePuzzelPieces() {
        this.pieces = [];

        let ids = PuzzleGridConfig.map((field) => field.id);
        
        PuzzleGridConfig.forEach((field) => {
            const random = Math.floor(Math.random() * ids.length);
            const id = ids[random];
            ids = ids.filter((item) => item !== id);
            const piece = new PuzzlePiece(id, field);
            piece.on('dragend', () => this.onPieceDragEnd(piece));
            this.pieces.push(piece);
            this.container.addChild(piece.sprite);
        });
    }

    onPieceDragEnd(piece) {
        const pieceToReplace = this.pieces.find((item) =>
            item !== piece
                && piece.sprite.x >= item.left
                && piece.sprite.x <= item.right
                && piece.sprite.y >= item.top
                && piece.sprite.y <= item.bottom
                );
        console.log('pieceToReplace', pieceToReplace);
        if (!pieceToReplace) {
            piece.reset();
            return;
        }
        const replaceField = pieceToReplace.field;
        pieceToReplace.setField(piece.field);
        piece.setField(replaceField);
    }


    
}