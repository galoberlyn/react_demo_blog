import jwst from 'app/assets/jwst.jpeg';

export const homePageStyles = {
  root: {
    height: '100vh',
    backgroundImage: `url(${jwst})`,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundSize: 'cover',
    textAlign: 'center',
    color: 'white',
    textShadow: '2px 2px grey',
    margin: 0,
  },
  fontHead: {
    ['@media (max-width: 600px)']: {
      fontSize: 25,
    }
  },
  button: {
    textTransform: 'none',
    marginTop: '-50px',
  }
};

