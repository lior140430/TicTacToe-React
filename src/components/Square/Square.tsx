
import { GameStatus, SquareValue } from '../../types';
import { shape } from './Icons';
import styles from './Square.module.css';

interface SquareProps {
    value: SquareValue;
    onSquareClick: () => void;
    status: GameStatus;
    isWinningSquare?: boolean;
}

export function Square({ value, onSquareClick, status, isWinningSquare }: SquareProps) {

    return (
        <button
            className={`${styles.square} ${status === 'draw' ? styles.drawAnimation : ''} ${isWinningSquare ? styles.winningSquare : ''}`}
            onClick={onSquareClick}
            disabled={value !== null}
        >
            {value && shape[value]}
        </button>
    );
}

