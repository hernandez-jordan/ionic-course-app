import React from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

interface ProfileDetails {
  id: string;
  title: string;
}

const ProfileDetails: React.FC<ProfileDetails> = ({ id, title }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={id} />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <br />
        User
      </IonContent>
    </IonPage>
  )
}

export default ProfileDetails