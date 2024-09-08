import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonImg, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import './LotteryTicket.css';

const LotteryTicket: React.FC = () => {
    const [image, setImage] = useState<string | undefined>(undefined);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const history = useHistory(); // Initialize useHistory

    const handleImageUpload = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file)); // Create a URL for the uploaded image
        }
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log({ firstName, lastName, email, mobile });

        // Show success message
        alert('Successfully submitted! Good luck!');

        // Redirect to homepage
        history.push('/tab2'); // Redirect to homepage or your desired path
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Enter Your Details</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard className="custom-card">
                    <IonCardContent>
                        <IonItem>
                            <IonLabel className="custom-label">Upload Image</IonLabel>
                            <input type="file" accept="image/*" onChange={handleImageUpload} />
                        </IonItem>

                        {image && <IonImg src={image} alt="Uploaded Preview" className="uploaded-image" />}

                        <IonItem className="custom-item">
                            <IonLabel style={{marginBottom:"15px"}} position="floating">First Name</IonLabel>
                            <IonInput labelPlacement='floating' placeholder='First Name' value={firstName} onIonChange={(e: CustomEvent) => setFirstName(e.detail.value!)} />
                        </IonItem>

                        <IonItem className="custom-item">
                            <IonLabel style={{marginBottom:"15px"}} position="floating">Last Name</IonLabel>
                            <IonInput labelPlacement='floating' placeholder='Last Name' value={lastName} onIonChange={(e: CustomEvent) => setLastName(e.detail.value!)} />
                        </IonItem>

                        <IonItem className="custom-item">
                            <IonLabel style={{marginBottom:"15px"}} position="floating">Email</IonLabel>
                            <IonInput labelPlacement='floating' placeholder='example@example.com' value={email} onIonChange={(e: CustomEvent) => setEmail(e.detail.value!)} />
                        </IonItem>

                        <IonItem className="custom-item">
                            <IonLabel style={{marginBottom:"15px"}} position="floating">Mobile</IonLabel>
                            <IonInput labelPlacement='floating' placeholder='0400000000' value={mobile} onIonChange={(e: CustomEvent) => setMobile(e.detail.value!)} />
                        </IonItem>

                        <IonButton className="custom-button" expand="block" onClick={handleSubmit}>
                            Submit
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default LotteryTicket;