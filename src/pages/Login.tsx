import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={Login}>
                            <IonInput fill='outline' labelPlacement='floating' label='Email' type='email' placeholder='example@example.com'></IonInput>
                            <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='Password' type='password' placeholder='********'></IonInput>
                            <IonButton type='submit' expand='block' className='ion-margin-top'>Login</IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
            <IonFooter>
                <IonToolbar>footer</IonToolbar>
            </IonFooter>
        </IonPage>
    )
}

export default Login;