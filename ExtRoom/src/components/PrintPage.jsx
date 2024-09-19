import React from 'react';
import PrintTemplate from './PrintTemplate';

const PrintPage = (props) => {
  return (
    <div className='col border py-3 mx-3'>
      <div>Preview</div>
      <button type='submit' className='btn btn-primary mt-2'>Print</button>
      <div className='row mx-auto' style={{ display: 'flex', justifyContent:'center' }}>
        <PrintTemplate newQR={props.newQR} ref={props.componentRef} qrHeight={props.qrHeight} qrWidth={props.qrWidth} qrSize={props.qrSize}/>
      </div>
    </div>
  );
};

export default PrintPage;
