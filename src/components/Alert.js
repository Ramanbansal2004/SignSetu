import React, { useEffect, useState } from 'react';

function Alert(props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (props.alert) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000); // alert disappears after 3 seconds

      return () => clearTimeout(timer); // cleanup on unmount or alert change
    }
  }, [props.alert]);

  const mkcpt = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div>
      {props.alert && visible && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 9999,
            minWidth: '250px',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          }}
        >
          <strong>{mkcpt(props.alert.type)}</strong>: {props.alert.msg}
          <button
            type="button"
            className="btn-close"
            onClick={() => setVisible(false)}
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
}

export default Alert;
