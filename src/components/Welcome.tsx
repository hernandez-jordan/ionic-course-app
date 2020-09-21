import React from 'react';
import { IonText } from '@ionic/react';
import './Welcome.css';

interface ContainerProps {
  title: string;
  subtitle: string;
}

const Welcome: React.FC<ContainerProps> = ({ title, subtitle }) => {
  return (
    <div className="container-welcome">
      <IonText>
        <h1>{title}</h1> 
        <h5>{subtitle}</h5>
      </IonText>
    </div>
  );
};

export default Welcome;
