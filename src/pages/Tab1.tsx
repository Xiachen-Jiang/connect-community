// src/pages/Tab1.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonText } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const handleButtonClick = () => {
    alert('Button Clicked!');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Button Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="ion-padding">
          <IonText>
            <h2>Welcome to the Connect Community!</h2>
            <p>Click the button below to start exploring our community.</p>
          </IonText>
          <div className="button-container">
            <IonButton expand="full" onClick={handleButtonClick}>
              Travel attractions
            </IonButton>
            <IonButton expand="full" onClick={handleButtonClick}>
              Events
            </IonButton>
            <IonButton expand="full" onClick={handleButtonClick}>
              Local Services
            </IonButton>
            <IonButton expand="full" onClick={handleButtonClick}>
              FAQ self help
            </IonButton>
            <IonButton expand="full" onClick={handleButtonClick}>
              Chatbot
            </IonButton>
            <IonButton expand="full" onClick={handleButtonClick}>
              Feedback
            </IonButton>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
