import { PRIMARY_COLOR, THIRD_COLOR } from './colors'

const styleCustom = {
  button: {
    padding: '8px 12px',
    backgroundColor: PRIMARY_COLOR,
    border: '2px solid #eee',
    color: ' #eee',
    maxWidth: '200px',
    borderRadius: '5px',
    transition: '0.2s',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px'
  },
  buttonHover: {
    backgroundColor: '#67eaf9',
    color: '#fff'
  },
  square: {
    width: '100px',
    height: '100px',
    border: `2px solid ${PRIMARY_COLOR}`,
    borderRadius: '5px',
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
    fontSize: '40px',
    isSelected: {
      color: '#fff',
      background: THIRD_COLOR
    }
  },
  winner: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    display: 'grid',
    placeItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    text: {
      background: '#cffefd',
      height: '300px',
      width: '320px',
      border: `2px solid ${PRIMARY_COLOR}`,
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px'
    }
  }
}

export default styleCustom
