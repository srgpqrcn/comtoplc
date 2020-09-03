import React from 'react';
import './InputData.css';

const InputData = ({comDataIni,comDataChange}) =>{
    return (
        <div className='flex flex-column items-center pa2 bg-blue'>
            <input className='InputBox' id='serverip' type='text' placeholder={comDataIni.ip1} onChange={comDataChange} />
            <input className='InputBox' id='clientip' type='text' placeholder={comDataIni.ip2} onChange={comDataChange} />
            <input className='InputBox' id='serverport' type='text' placeholder={comDataIni.port1} onChange={comDataChange} />
            <input className='InputBox' id='clientport' type='text' placeholder={comDataIni.port2} onChange={comDataChange} />
        </div>
    );
}

export default InputData;