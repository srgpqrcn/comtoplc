import React, {Component, Fragment} from 'react';
import InputData from './InputData';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            ip1:'255.255.255.000',
            ip2:'255.255.255.000',
            port1:'3000',
            port2:'5000',
        }
        // console.log("constructor");
    }

    onInputChange = (event)=>{
        const input = event.target.value;
        const ident = event.target.id;
        console.log((this.state.ip1.length))
        // console.log("onInputChange")
        console.log(ident);
       if(ident==='serverip' && input.length===15){this.setState({ip1:input});}
       if(ident==='clientip' && input.length===15){this.setState({ip2:input});}
       if(ident==='serverport' && input.length===15){this.setState({port1:input});}
       if(ident==='clientport' && input.length===15){this.setState({port2:input});}
   
    }

    render(){
        // console.log("render");
        const dataIni = { 
        ip1:'255.255.255.000',
        ip2:'255.255.255.000',
        port1:'3000',
        port2:'5000',
    }
    console.log(this.state)
        return(
            <Fragment>
                <div className='tc bg-red'>
                    <h1>INDUSTRIAL COMMUNICATION APP</h1>
                    {/* <InputData comDataIni={this.state} comDataChange={this.onInputChange}/> */}
                    <InputData comDataIni={dataIni} comDataChange={this.onInputChange}/>
                </div>
            </Fragment>
        );
    }
}

export default App;