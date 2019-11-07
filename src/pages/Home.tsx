import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  IonButton,
  IonRow,
  IonGrid,
  IonCol
} from '@ionic/react';
import { book, build, colorFill, grid, camera } from 'ionicons/icons';
import React from 'react';
import './Home.css';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            <img className="title-logo" src="/assets/logo.svg" alt="" />
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="topbar-grid">
          <IonRow className="ion-align-items-center">
            <IonCol>
              <IonSearchbar></IonSearchbar>
            </IonCol>
            <IonCol size="auto">
              <IonButton fill="clear">
                <IonIcon icon={camera} color="medium" />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt="" />
          <IonCardHeader>
            <IonCardSubtitle>Looking for the perfect outfit</IonCardSubtitle>
            <IonCardTitle>Your search ends now!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>
                  Click a picture and we will find out what you are eyeing at.
                Sort among our endless collection and unbelievable offers.
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton>
                    Find your outfit
                <IonIcon slot="end" icon={camera} />
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
