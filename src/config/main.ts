import logoDefault from '@/assets/logos/jsandoval-logo.png';
import logoWhite from '@/assets/logos/jsandoval-logo-white.png';
import projectAdara from '@/assets/img/projects/adara.jpg';
import projectBernardo from '@/assets/img/projects/bernardo.jpg';
import projectSweetFruit from '@/assets/img/projects/sweetfruit.jpg';
import projectAgroclub from '@/assets/img/projects/agroclub.jpg';

const configMain = {
  logo: {
    default: logoDefault,
    dark: logoWhite,
  },
  worksSlider: [
    {
      id: 'work-1',
      img: projectAdara,
    },
    {
      id: 'work-2',
      img: projectBernardo,
    },
    {
      id: 'work-3',
      img: projectSweetFruit,
    },
    {
      id: 'work-4',
      img: projectAgroclub,
    },
  ],
};

export default configMain;
