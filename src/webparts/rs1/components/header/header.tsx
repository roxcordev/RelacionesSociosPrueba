import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import './header.css';
import { IheaderProps } from './IheaderProps';


export default class NavBasicExample extends React.Component<IheaderProps>{
    constructor(props: IheaderProps) {
        super(props)
        
    }
   
    
    render() {
        let navbarLeft: JSX.Element = <div className="head">
            
                                        <p>{this.props.tituloGeneral}</p>
                                       
                                        </div>     
             

        return (
            <div>
               {navbarLeft}
            </div>
        )
    }
}



