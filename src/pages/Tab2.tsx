import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonIcon 
} from '@ionic/react';
import { 
  logoHtml5, 
  logoCss3, 
  logoJavascript, 
  logoSass, 
  logoNodejs, 
  logoPython,
  chevronForward 
} from 'ionicons/icons';

//css
import './Tab2.css';


const course = [
  {
    'title': 'HTML5',
    'icon': `${logoHtml5}`,
    'description': 'The latest version of the web\'s markup language.',
    'color': '#F46529'
  },
  {
    'title': 'CSS3',
    'icon': `${logoCss3}`,
    'description': 'The latest version of cascading stylesheets - the styling language of the web!',
    'color': '#0CA9EA'
  },
  {
    'title': 'JavaScript',
    'icon': `${logoJavascript}`,
    'description': 'One of the most popular programming languages on the Web!',
    'color': '#FFD439'
  },
  {
    'title': 'Sass',
    'icon': `${logoSass}`,
    'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
    'color': '#CE6296'
  },
  {
    'title': 'NodeJS',
    'icon': `${logoNodejs}`,
    'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
    'color': '#78BD43'
  },
  {
    'title': 'Python',
    'icon': `${logoPython}`,
    'description': 'A clear and powerful object-oriented programming language!',
    'color': '#3575AC'
  },
];

const Tab2: React.FC = () => {

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Course</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <IonList>
          {course.map((course, key) =>
            <IonItem key={key} button onClick={() => course.title}>
              <IonIcon slot="start" icon={course.icon}></IonIcon>
              <IonIcon slot="end" icon={chevronForward}></IonIcon>
              <IonLabel>
                <h3>{course.title}</h3>
              </IonLabel>
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};


export default Tab2;
