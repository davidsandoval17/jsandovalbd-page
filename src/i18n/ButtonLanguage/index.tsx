import { FiChevronDown, Menu, TbLanguage } from '@/components';
import { CgArrowTopRight } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';
import { getLocalStorage, setLocalStorage } from '@/utils';
import { Z_INDEX_BUTTON } from '@/theme';

const ButtonLanguage = () => {
  const { i18n } = useTranslation();

  const handleChangLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setLocalStorage('language', language);
  };

  const currentLanguage = getLocalStorage('language');

  return (
    <Menu
      zIndex={Z_INDEX_BUTTON}
      optionActive={currentLanguage}
      controlLabel={
        <>
          <TbLanguage />
          <FiChevronDown />
        </>
      }
      options={[
        {
          id: 'en',
          label: (
            <>
              English <CgArrowTopRight />
            </>
          ),
          onSelect: () => handleChangLanguage('en'),
        },
        {
          id: 'es',
          label: (
            <>
              Español <CgArrowTopRight />
            </>
          ),
          onSelect: () => handleChangLanguage('es'),
        },
      ]}
    ></Menu>
  );
};

export default ButtonLanguage;
