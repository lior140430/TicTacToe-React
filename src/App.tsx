import confetti from 'canvas-confetti';
import { useEffect } from 'react';
import styles from './App.module.css';
import { Board } from './components/board/Board';
import { useTicTacToe } from './hooks/useTicTacToe';

function App() {
  const { squares, handlePlay, resetGame, status, turn, winnerResult } = useTicTacToe();

  useEffect(() => {
    if (status === 'winner') {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [status]);

  const statusMessages = {
    winner: `Winner: ${winnerResult?.winner}`,
    draw: 'Draw!',
    playing: `Next turn: ${turn}`
  };

  return (
    <div className={styles.container}>
      <div className={styles.game}>
        <div className={styles.status}>{statusMessages[status]}</div>
        <div className={styles.gameBoard}>
          <Board squares={squares} onPlay={handlePlay} winningLine={winnerResult?.line} isDraw={status === 'draw'} />
        </div>
        <button className={styles.resetButton} onClick={resetGame}>Restart Game</button>
      </div>
    </div>
  )
}


export default App
