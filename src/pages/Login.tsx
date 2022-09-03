import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer'
import WalletContainer from '../components/WalletContainer'
import './Login.css';


const Login: React.FC = () => {

    return (
        <IonPage>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Login</IonTitle>
            </IonToolbar>
          </IonHeader>
          <WalletContainer />
        </IonContent>
      </IonPage>
    );
  };

export default Login;