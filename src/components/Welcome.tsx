import React from 'react';
import { IonText } from '@ionic/react';
import './Welcome.css';

interface ContainerProps {
  user: string;
  subtitle: string;
}

const Welcome: React.FC<ContainerProps> = ({ user, subtitle }) => {
  return (
    <div className="container-welcome">
      <IonText>
        <h1>{user}</h1> 
        <h5>{subtitle}</h5>
      </IonText>
    </div>
  );
};

export default Welcome;
