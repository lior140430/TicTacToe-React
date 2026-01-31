import styles from './App.module.css';
import { Board } from './components/board/Board';
import { useTicTacToe } from './hooks/useTicTacToe';

function App() {
  const { squares, handlePlay, resetGame, status, winningLine, isDraw } = useTicTacToe();

  return (
    <div className={styles.container}>
      <div className={styles.game}>
        <div className={styles.status}>{status}</div>
        <div className={styles.gameBoard}>
          <Board squares={squares} onPlay={handlePlay} winningLine={winningLine} isDraw={isDraw} />
        </div>
        <button className={styles.resetButton} onClick={resetGame}>Restart Game</button>
      </div>
    </div>
  )
}


export default App
