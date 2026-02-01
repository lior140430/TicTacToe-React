export type Player = "X" | "O";

export type SquareValue = Player | null;

export type GameStatus = 'playing' | 'winner' | 'draw';

export type WinnerResult = {
    winner: Player;
    line: number[];
} | null;

