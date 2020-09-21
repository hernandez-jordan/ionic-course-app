import React from 'react';
import { 
  IonPage, 
  IonSlides, 
  IonSlide, 
  IonContent, 
  IonLabel 
} from '@ionic/react';

//components
import Welcome from '../components/Welcome';
import SearchBar from '../components/SearchBar/SearchBar';
import Card from '../components/Card/Card';

//css
import './Tab1.css';

const subtitleMessage = `What would you like to learn today? Search below`;
const slideOpts = {
  initialSlide: 1,
  speed: 400
};

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Welcome title="Hi, Jordan" subtitle={subtitleMessage} />
        <SearchBar />
        <IonLabel color="medium">Studying</IonLabel><br />
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide className="slides">
            <Card />
          </IonSlide>
          <IonSlide className="slides">
            <Card />
          </IonSlide>
          <IonSlide className="slides">
            <Card />
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
