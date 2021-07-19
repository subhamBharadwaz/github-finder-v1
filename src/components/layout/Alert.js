import React from 'react'

const Alert = ({ alert, onClose }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`} style={AlertStyle}>
        <div>
          <i className="fas fa-info-circle" />
          {alert.msg}
        </div>
        <i
          className="fas fa-times"
          onClick={onClose}
          style={{ cursor: 'pointer' }}
        />
      </div>
    )
  )
}

const AlertStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export default Alert
