const size = {
  mobileS: '320px',
  mobileL: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px'
}

const devices = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(max-widht: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};

export default devices;