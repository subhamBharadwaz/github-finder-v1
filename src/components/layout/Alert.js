import React from 'react'

const Alert = ({ alert, onClose }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <div>
          <i className="fas fa-info-circle" />
          {alert.msg}
        </div>
        <i
          className="fas fa-times close"
          onClick={onClose}
          style={{ cursor: 'pointer' }}
        />
      </div>
    )
  )
}

export default Alert
