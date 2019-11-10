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
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  IonButton,
  IonRow,
  IonGrid,
  IonCol,
  IonLoading
} from '@ionic/react';
import { camera } from 'ionicons/icons';
import React from 'react';
import './Home.css';
import { getDiscoveryItems, Product, getImage, search } from '../api/products';

interface IState {
  discoveryItems: Product[]
  loading: boolean
}

class HomePage extends React.Component {

  state: Readonly<IState> = {
    discoveryItems: [],
    loading: false
  }

  private hiddenUpload!: any;

  uploadOnClick = () => {
    this.hiddenUpload.click();
  }

  uploadOnChange = (event: any) => {
    const file: File = this.hiddenUpload.files[0]
    this.setState({ loading: true })
    search(file).then((response: any) => {
      this.setState({
        discoveryItems: response.matches.map((i: any) => i.image),
        loading: false
      })
    }).finally(() => {
      this.setState({ loading: false })
    });
  }

  componentDidMount() {
    getDiscoveryItems()
      .then(discoveryItems => {
        this.setState({ discoveryItems })
      })
  }

  render() {
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
            <img src="/assets/cover.jpeg" alt="" />
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
                    <input ref={(ref: HTMLInputElement) => {
                      this.hiddenUpload = ref
                    }} className="hiddenUpload" type="file" accept="image/*;capture=camera"
                      onChange={this.uploadOnChange} />
                    <IonLoading
                      isOpen={this.state.loading}
                      message={'Loading...'}
                    />
                    <IonButton onClick={this.uploadOnClick}>
                      Find your outfit
                      <IonIcon slot="end" icon={camera} />
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
          <IonGrid class="product-grid">
            <IonRow>
              {this.state.discoveryItems.map((item: Product) => (
                <IonCol key={item.id} size="6">
                  <IonCard>
                    <img src={getImage(item.id)} alt="" />
                    <IonCardHeader>
                      <IonCardTitle class="product-title">{item.displayName}</IonCardTitle>
                      <IonCardSubtitle>in {item.articleType}</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }
}

export default HomePage;
