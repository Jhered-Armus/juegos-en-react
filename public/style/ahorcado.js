const limb = {
  position: 'absolute',
  backgroundColor: '#f0ad4e'
}
const arm = { width: '30px', height: '10px' }
const leg = {
  width: '10px',
  height: '40px'
}
const styleAhorcado = {
  horca: {
    pole1: {
      position: 'relative',
      top: '2',
      left: '20px',
      width: '5px',
      height: '100%',
      backgroundColor: 'black',
      transform: 'translateX(-50%)'
    },
    pole2: {
      position: 'absolute',
      top: '13%',
      left: '60px',
      width: '90px',
      height: '2%',
      backgroundColor: 'black'
    },
    pole3: {
      position: 'absolute',
      top: '13%',
      left: '150px',
      width: '5px',
      height: '10%',
      backgroundColor: 'brown',
      transform: 'translateX(-50%)'
    }
  },
  stickMan: {
    head: {
      position: 'absolute',
      top: '17%',
      left: '150px',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#f0ad4e',
      transform: 'translateX(-50%)'
    },
    torso: {
      position: 'absolute',
      top: '30%',
      left: '150px',
      width: '10px',
      height: '60px',
      backgroundColor: '#f0ad4e',
      transform: 'translateX(-50%)'
    },
    leftArm: {
      ...limb,
      ...arm,
      top: '31%',
      left: '120px',
      transform: 'rotate(15deg)'
    },
    rightArm: {
      ...limb,
      ...arm,
      top: '31%',
      left: '150px',
      transform: 'rotate(-15deg)'
    },
    leftLeg: {
      ...limb,
      ...leg,
      top: '45%',
      left: '130px',
      transform: 'rotate(45deg)'
    },
    rightLeg: {
      ...limb,
      ...leg,
      top: '45%',
      left: '160px',
      transform: 'rotate(-45deg)'
    }
  },
  cartelGameOver: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#cffefd',
    border: '2px solid',
    height: '30%',
    maxWidth: '40%',
    maxHeight: '80vh'
  }
}

export { styleAhorcado }
