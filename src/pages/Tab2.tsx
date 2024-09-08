import { IonButton, IonContent, IonHeader, IonImg, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import LoterryImg from "../Images/image1.webp"
import { Route, useHistory } from 'react-router';

const Tab2: React.FC = () => {

  // Use history hook for navigation
  const history = useHistory();

  const handleButtonClick = () => {
    // Navigate to another page when the button is clicked
    history.push('/lotteryticket'); // Replace with the actual route you want to navigate to
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Free Ticket</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="secondary">
            <IonTitle size="large">Free Ticket</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonImg src={LoterryImg}></IonImg>
        <IonToolbar>
          <IonText>
            <h3>Discover Northern Territory: Win Free Flights, accommodation and tour guide</h3>
            <p>The Northern Territory Government of Australia is hosting an event to boost local tourism by offering free flight tickets and discounted airfares. Here are the details:</p>
            <ul>
              <li>What’s Offered:
                <ul>
                  <li>2 free flight tickets</li>
                  <li>10 half-price flight tickets</li>
                </ul>
              </li>

              <li>How to Participate:
                <ul>
                  <li>Upload a photo of NT</li>
                  <li>Register your personal details</li>
                </ul>
              </li>
              <li>Event Schedule:
                <ul>
                  <li>Participation Period: 1st to 20th of each month</li>
                  <li>Winners Announcement: 25th of each month (via email)</li>
                </ul>
              </li>
            </ul>
            <p>Don’t miss your chance to explore the beauty of the Northern Territory with this exciting opportunity!</p>
          </IonText>
        </IonToolbar>

        <IonButton className='ion-margin' expand="block" onClick={handleButtonClick}>Let's Go!</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;