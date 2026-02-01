import { useState } from 'react';
import { Player } from '../components/Square/Square';

type WinnerResult = {
    winner: Player;
    line: number[];
} | null;

export function useTicTacToe() {
    const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const calculateWinner = (squares: Player[]): WinnerResult => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], line: lines[i] };
            }
        }

        return null;
    };

    const winnerResult = calculateWinner(squares);
    const winner = winnerResult?.winner;
    const winningLine = winnerResult?.line || null;

    // Check for draw: No winner and no nulls left
    const isDraw = !winner && !squares.includes(null);

    const handlePlay = (i: number) => {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    };

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    };

    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else if (isDraw) {
        status = "Draw!";
    } else {
        status = `Next turn: ${xIsNext ? 'X' : 'O'}`;
    }

    return {
        squares,
        handlePlay,
        resetGame,
        status,
        winner,
        winningLine,
        isDraw
    };
}
