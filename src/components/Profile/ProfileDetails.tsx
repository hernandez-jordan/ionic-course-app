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


interface ProfileDetailsProps {
  id: string;
  title: string;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ id, title }) => {
  const [value, setValue] = useState<string>();
  const [valueArr, setValueArr] = useState([{}])


  //take value from input, on enter, push string to array, // send to database, yet to come*
  const handleSubmit = (e: CustomEvent<any>) => {
    e.stopPropagation();
    setValueArr([...valueArr, {text: value}]);
  };

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
        <form onSubmit={e =>  handleSubmit}>
          <IonInput
            inputmode="text"
            className="ion-text-center"
            value={value}
            placeholder="Enter First Name"
            onIonChange={
              e => setValue(e.detail.value!)
            }
            clearInput={true}
          >
          </IonInput>
        </form>

      </IonContent>
    </IonPage>
  )
}

export default ProfileDetails