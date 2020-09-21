import React from 'react';
import { IonAvatar } from '@ionic/react'
import './Profile.css'

interface ContainerProps {
  sourcePath: string;
  alt?: string;
  nameProfile: string;
  emailProfile: string;
}

const Profile: React.FC<ContainerProps> = ({ sourcePath, alt, nameProfile, emailProfile }) => {
  return (
    <>
      <IonAvatar className="profile-img">
        <img src={sourcePath} alt={alt} />
      </IonAvatar>
      <h2 className="ion-text-center">{nameProfile}</h2>
      <h6 className="ion-margin-bottom ion-text-center" >{emailProfile}</h6>
    </>
  )
};

export default Profile;



