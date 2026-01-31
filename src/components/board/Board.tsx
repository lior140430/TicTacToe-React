import { Player, Square } from '../Square/Square';
import styles from './Board.module.css';

interface BoardProps {
    squares: Player[];
    onPlay: (index: number) => void;
    winningLine?: number[] | null;
    isDraw?: boolean;
}

export function Board({ squares, onPlay, winningLine, isDraw }: BoardProps) {
    const isWinningSquare = (i: number) => winningLine?.includes(i);

    return (
        <>
            <div className={styles.row}>
                <Square value={squares[0]} onSquareClick={() => onPlay(0)} isWinningSquare={isWinningSquare(0)} isDraw={isDraw} />
                <Square value={squares[1]} onSquareClick={() => onPlay(1)} isWinningSquare={isWinningSquare(1)} isDraw={isDraw} />
                <Square value={squares[2]} onSquareClick={() => onPlay(2)} isWinningSquare={isWinningSquare(2)} isDraw={isDraw} />
            </div>
            <div className={styles.row}>
                <Square value={squares[3]} onSquareClick={() => onPlay(3)} isWinningSquare={isWinningSquare(3)} isDraw={isDraw} />
                <Square value={squares[4]} onSquareClick={() => onPlay(4)} isWinningSquare={isWinningSquare(4)} isDraw={isDraw} />
                <Square value={squares[5]} onSquareClick={() => onPlay(5)} isWinningSquare={isWinningSquare(5)} isDraw={isDraw} />
            </div>
            <div className={styles.row}>
                <Square value={squares[6]} onSquareClick={() => onPlay(6)} isWinningSquare={isWinningSquare(6)} isDraw={isDraw} />
                <Square value={squares[7]} onSquareClick={() => onPlay(7)} isWinningSquare={isWinningSquare(7)} isDraw={isDraw} />
                <Square value={squares[8]} onSquareClick={() => onPlay(8)} isWinningSquare={isWinningSquare(8)} isDraw={isDraw} />
            </div>
        </>
    );
}
