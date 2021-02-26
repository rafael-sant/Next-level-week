import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

function MyApp({ Component, pageProps }) {

  
  return (
      <ChallengesProvider>
          <Component {...pageProps} />
      </ChallengesProvider>
  )
}

export default MyApp
