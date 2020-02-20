import * as React from 'react';
import './App.css';
import { IDynamoProps } from './IDynamoProps';

import { escape } from '@microsoft/sp-lodash-subset';
import 'office-ui-fabric-react/dist/css/fabric.css';

import NavBar from './navbar/navbar';
import Header from './header/header';
import { Idatos } from './models/Idatos'

export default class Dynamo extends React.Component {

  itemsDatos:Idatos[]=[
    {name:'Información del proyecto',key:'infoProject'},
    {name:'Documentación',key:'doc'}
  ]

    
    public render(): React.ReactElement<IDynamoProps> {
      return (
        
            <div>
              <div>
              <Header 
              tituloGeneral="Titulo principal"
              
              />
              </div>
             


              <NavBar 
              titulos={this.itemsDatos}
              
              />
            </div>
  
  
      );
    }
  }
  