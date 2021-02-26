import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenges } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);
 
    function handleChallengeSucceded() {
        resetCountdown();
        completeChallenges()
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetChallenge()
        
    }
    return(
        <div className={ styles.challengeBoxContainer }>
            { activeChallenge ? (

                <div className={styles.challengeActive}>
                    <header>
                        Ganhe { activeChallenge.amount } xp 
                    </header>

                    <main> 
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p> { activeChallenge.description }</p>
                    </main>

                    <footer>
                        <button
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={handleChallengeFailed}>
                             Falhei
                        </button>

                        <button
                        type="button"
                        className={styles.challengeSucceededButton}
                        onClick={handleChallengeSucceded}
                        >
                            Completei
                        </button>
                    </footer>

                </div>
            ) : (

                <div>
                    <div className={ styles.challengeNotActive }>
                        <strong>Finalize o ciclo para receber um desafio</strong>

                        <p>
                            <img src="/icons/level-up.svg" alt="Up icon"/>
                            Avance de level completando desafios
                        </p>
                    </div>
                </div>
            )}
          
        </div>
    )
}