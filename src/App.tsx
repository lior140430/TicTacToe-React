import { useState } from 'react';
import styles from './App.module.css';
import { Board } from './components/board/Board';
import type { Player } from './components/Square/Square';
import { Examples } from './Examples';

function App() {
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));

  function handlePlay(i: number) {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }

  return (
    <div className={styles.container}>
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board squares={squares} onPlay={handlePlay} />
        </div>
      </div>

      <div style={{ marginTop: '50px', borderTop: '1px solid #444', width: '100%' }}>
        <Examples />
      </div>
    </div>
  )
}


export default App
