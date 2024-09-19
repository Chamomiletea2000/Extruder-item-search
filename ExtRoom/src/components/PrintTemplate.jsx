import React from 'react';
import QRCode from "react-qr-code";

const PrintTemplate = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{...styles.printArea,height:props.qrHeight,width:props.qrWidth}}>
      {props.newQR.split('\n').map((item, index)=>{
          return(
            <div key={index} style={styles.description} className='row p-1 m-0'>{item}</div>
          );
        })}
      <div style={styles.qrCode}>
        <QRCode value={props.newQR} size={props.qrSize} />
      </div>
    </div>
  );
});

const styles = {
  printArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    boxSizing: 'border-box',
    margin: '2rem auto',
  },
  qrCode: {
    textAlign: 'center',
    margin: '20px',
  },
  description: {
    textAlign: 'center',
    fontSize: '14px',
  },
};

export default PrintTemplate;
