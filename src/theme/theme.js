import { tailwind } from '@theme-ui/presets';

const theme = {
  ...tailwind,
  general: {
    position: {
      centralize: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  },
  navigation: {
    NavHeader: {
      width: '90vw',
      maxHeight: '70px',
      padding: '0px 50px',
      // color: "black",
      color: tailwind.colors.gray[3],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      textTransform: 'uppercase',
      fontFamily: tailwind.fonts.sans,
      fontSize: '18px'
    },
    LangBtn: {
      width: '50px',
      height: '50px',
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  containers: {
    glass: {
      // color: "black",
      color: tailwind.colors.gray[3],
      background: 'rgba(255, 255, 255, 0.1)',
      boxShadow: '20px 20px 50px rgba(0, 0, 0, 0.5)',
      borderRadius: '10px',
      backdropFilter: 'blur(2px)'
    },
    blackGlass: {
      color: tailwind.colors.gray[3],
      background: 'rgba(0, 0, 0, 0.75)',
      borderRadius: '10px',
      backdropFilter: 'blur(10px)'
    },
    page: {
      height: '100%',
      width: '90%'
    },
    circle: {
      borderRadius: '50%',
      border: '4px solid rgba(255, 255, 255, 0.25)',
      boxShadow: '20px 20px 50px rgba(0, 0, 0, 0.5)',
      overflow: 'hidden'
    }
  },
  images: {
    me: {
      transform: `scale(${tailwind.transforms.scale['125']}) translate(0, ${tailwind.transforms.translate['10']})`
    }
  }
};

// console.log(tailwind);

export default theme;
