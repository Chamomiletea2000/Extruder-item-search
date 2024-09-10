import React from 'react';
import QRCode from "react-qr-code";

const PrintTemplate = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{...styles.printArea,height:props.qrHeight}}>
      <div style={styles.qrCode}>
        <QRCode value={props.newQR} size={200} />
      </div>
      <div style={styles.description}>
        {props.newQR.split('\n').map((item)=>{
          return(
            <p>{item}</p>
          );
        })}
      </div>
    </div>
  );
});

const styles = {
  printArea: {
    width: '3in',
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
    marginBottom: '20px',
  },
  description: {
    textAlign: 'center',
    fontSize: '14px',
  },
};

export default PrintTemplate;
