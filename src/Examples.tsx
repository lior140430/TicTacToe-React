import { useState } from 'react';
import styles from './App.module.css'; // Reusing app styles for consistency if needed, or inline
import { Board } from './components/board/Board';
import { Square } from './components/Square/Square';

export function Examples() {
    const [xKey, setXKey] = useState(0);
    const [oKey, setOKey] = useState(0);

    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
            <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <h2 style={{ color: 'white' }}>Clear Board Example</h2>
                <div className={styles.gameBoard}>
                    <Board squares={Array(9).fill(null)} onPlay={() => { }} />
                </div>
            </section>

            <div style={{ display: 'flex', gap: '40px' }}>
                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <h2 style={{ color: 'white' }}>X Square Example</h2>
                    <p style={{ margin: 0, color: '#888', fontSize: '0.8rem' }}>(Click to replay)</p>
                    <div style={{ padding: '10px', background: '#2a2a2a', borderRadius: '8px' }}>
                        <Square key={`x-${xKey}`} value="X" onSquareClick={() => setXKey(k => k + 1)} />
                    </div>
                </section>

                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <h2 style={{ color: 'white' }}>O Square Example</h2>
                    <p style={{ margin: 0, color: '#888', fontSize: '0.8rem' }}>(Click to replay)</p>
                    <div style={{ padding: '10px', background: '#2a2a2a', borderRadius: '8px' }}>
                        <Square key={`o-${oKey}`} value="O" onSquareClick={() => setOKey(k => k + 1)} />
                    </div>
                </section>
            </div>
        </div>
    );
}
