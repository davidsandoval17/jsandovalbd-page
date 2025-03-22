import {
  Col,
  Container,
  Row,
  SocialNetworks,
  LogoTheme,
  Typography,
  Stack,
} from '@/components';
import { useTranslation } from 'react-i18next';
import { FooterBackground } from './styled';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterBackground>
      <Container>
        <Stack flexDirection='column' alignItems='center'>
          <LogoTheme width='auto' />
          <Typography
            size='xs'
            weight='semibold'
            className='text-center'
            dangerouslySetInnerHTML={{ __html: t('copy') }}
          />
          <SocialNetworks />
        </Stack>
      </Container>
    </FooterBackground>
  );
};

export default Footer;
