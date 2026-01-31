import { type Player, Square } from '../Square/Square';
import styles from './Board.module.css';

interface BoardProps {
    squares: Player[];
    onPlay: (index: number) => void;
}

export function Board({ squares, onPlay }: BoardProps) {
    return (
        <>
            <div className={styles.row}>
                <Square value={squares[0]} onSquareClick={() => onPlay(0)} />
                <Square value={squares[1]} onSquareClick={() => onPlay(1)} />
                <Square value={squares[2]} onSquareClick={() => onPlay(2)} />
            </div>
            <div className={styles.row}>
                <Square value={squares[3]} onSquareClick={() => onPlay(3)} />
                <Square value={squares[4]} onSquareClick={() => onPlay(4)} />
                <Square value={squares[5]} onSquareClick={() => onPlay(5)} />
            </div>
            <div className={styles.row}>
                <Square value={squares[6]} onSquareClick={() => onPlay(6)} />
                <Square value={squares[7]} onSquareClick={() => onPlay(7)} />
                <Square value={squares[8]} onSquareClick={() => onPlay(8)} />
            </div>
        </>
    );
}
