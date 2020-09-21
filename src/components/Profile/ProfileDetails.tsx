import React, { useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';


interface ProfileDetailsProps  {
  id: string;
  title: string;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ id, title }) => {
  const [value, setValue] = useState<string>('');
  const handleChange = (newValue : any) => setValue(newValue);
  
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
        <IonInput
          className="ion-text-center"
          value={value}
          placeholder="Enter First Name"
          onIonChange={handleChange}>
        </IonInput>
      </IonContent>
    </IonPage>
  )
}

export default ProfileDetails