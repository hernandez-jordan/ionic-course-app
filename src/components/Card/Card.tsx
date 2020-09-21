import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg } from '@ionic/react';
import cardImage from './php.png';
import './Card.css';


const Card: React.FC = () => {
  return(
    <IonCard className="cardContainer">
      <IonImg src={cardImage} />
      <IonCardHeader>
        <IonCardSubtitle>Javascript</IonCardSubtitle>
        <IonCardTitle>Ionic framework with React JS</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
    </IonCard>
  )
}

export default Card