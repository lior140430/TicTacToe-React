import { useMemo, useState } from 'react';
import { GameStatus, Player, SquareValue, WinnerResult } from '../types';

function calculateWinner(squares: SquareValue[]): WinnerResult {
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
            return { winner: squares[a] as Player, line: lines[i] };
        }

    }

    return null;
}

export function useTicTacToe() {
    const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
    const [turn, setTurn] = useState<Player>('X');

    const winnerResult = useMemo(() => calculateWinner(squares), [squares]);

    let status: GameStatus = 'playing';

    if (winnerResult) {
        status = 'winner';
    } else if (!squares.includes(null)) {
        status = 'draw';
    }

    function handlePlay(i: number) {
        if (status !== 'playing' || squares[i]) {
            return;
        }

        const nextSquares = squares.slice();
        nextSquares[i] = turn;
        setSquares(nextSquares);
        setTurn(turn === 'X' ? 'O' : 'X');
    }

    function resetGame() {
        setSquares(Array(9).fill(null));
        setTurn('X');
    }

    return {
        squares,
        handlePlay,
        resetGame,
        turn,
        status,
        winnerResult
    };
}
