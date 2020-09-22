import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonLabel,
  IonItem,
  IonIcon
} from '@ionic/react';
import { chevronForward } from 'ionicons/icons';
import ProfilePicture from '../components/Profile/profile.png'

//Components
import Profile from '../components/Profile/Profile';


//css
import './Tab3.css';

const profileList = [
  {
    title: 'First Name',
    href: '/first-name'
  },
  {
    title: 'Last Name',
    href: '/last-name'
  },
  {
    title: 'Email',
    href: '/email'
  },
  {
    title: 'Progress',
    href: '/progress'
  },
  {
    title: 'Settings',
    href: '/settings'
  },

]


const Tab3: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Profile 
          sourcePath={ProfilePicture}
          alt="profile" 
          nameProfile={'Jordan Hernandez'}
          emailProfile="jordanhernandez@apple.io"
          />
        <IonList>
          {profileList.map((profileList, key) =>
            <IonItem key={key} button href={profileList.href}>
              <IonLabel>
                <h3>{profileList.title}</h3>
              </IonLabel>
              <IonIcon slot="end" icon={chevronForward}></IonIcon>
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
