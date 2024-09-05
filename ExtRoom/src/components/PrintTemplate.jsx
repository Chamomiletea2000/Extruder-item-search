import React from 'react';
import QRCode from "react-qr-code";

const PrintTemplate = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={styles.printArea}>
      <div style={styles.qrCode}>
        <QRCode value={props.newQR} size={200} />
      </div>
      <div style={styles.description}>
        <p>Your description goes here. Add any content you want to display below the QR code.</p>
      </div>
    </div>
  );
});

const styles = {
  printArea: {
    width: '3in',
    height: '6in',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    boxSizing: 'border-box',
    margin: '0 auto',
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
