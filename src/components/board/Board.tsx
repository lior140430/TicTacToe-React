import { GameStatus, SquareValue } from '../../types';
import { Square } from '../Square/Square';
import styles from './Board.module.css';

interface BoardProps {
    squares: SquareValue[];
    onPlay: (index: number) => void;
    winningLine?: number[] | null;
    status: GameStatus;
}

export function Board({ squares, onPlay, winningLine, status }: BoardProps) {
    function isWinningSquare(i: number) {
        return winningLine?.includes(i);
    }

    return (
        <div className={status === 'draw' ? styles.drawBoard : ''}>
            {[0, 1, 2].map((row) => (
                <div key={row} className={styles.row}>
                    {[0, 1, 2].map((col) => {
                        const index = row * 3 + col;
                        return (
                            <Square
                                key={index}
                                value={squares[index]}
                                onSquareClick={() => onPlay(index)}
                                isWinningSquare={isWinningSquare(index)}
                                status={status}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
