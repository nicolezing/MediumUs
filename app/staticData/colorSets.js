export const colorSet = {
  green: {
    color: '#029e74',
    borderColor: '#03a87c',
    hoverColor: '#018f69',
  },
  blue: {
    color: '#3172DD',
    borderColor: '#2D84FF',
    hoverColor: '#3069C6',
  },
  black: {
    color: '#292929',
    borderColor: '#757575',
    hoverColor: '#080808',
  },
  pureBlack: {
    color: '#292929',
    borderColor: '#292929',
    hoverColor: '#292929',
  },
  gray: {
    color: '#757575',
    borderColor: '#8a8a8a',
    hoverColor: '#292929',
  },
  pureGray: {
    color: '#757575',
    borderColor: '#757575',
    hoverColor: '#757575',
  },
  red: {
    color: '#C33731',
    borderColor: '#E63935',
    hoverColor: '#BC4040',
  },
  purple: {
    color: '#7656f2',
    borderColor: '#8c5dff',
    hoverColor: '#6b51d8',
  },
  pink: {
    color: '#B34180',
    borderColor: '#D44596',
    hoverColor: '#962f68',
  },
  // disable: {
  //   color: 'rgba(0,0,0,.54)',
  //   borderColor: 'rgba(0,0,0,.54)',
  //   hoverColor: 'rgba(0,0,0,.54)',
  // },
};

export default color => colorSet[color || 'green'];
