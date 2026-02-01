
import { SquareValue } from '../../types';
import { shape } from './Icons';
import styles from './Square.module.css';

interface SquareProps {
    value: SquareValue;
    onSquareClick: () => void;
    isDraw?: boolean;
    isWinningSquare?: boolean;
}

export function Square({ value, onSquareClick, isDraw, isWinningSquare }: SquareProps) {

    return (
        <button
            className={`${styles.square} ${isDraw ? styles.drawAnimation : ''} ${isWinningSquare ? styles.winningSquare : ''}`}
            onClick={onSquareClick}
            disabled={value !== null}
        >
            {value && shape[value]}
        </button>
    );
}

