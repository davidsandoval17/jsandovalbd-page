import {
  Col,
  Container,
  Row,
  Nav,
  LogoTheme,
  SocialNetworks,
  Stack,
  SwitchTheme,
  NavToggler,
} from '@/components';
import { useScrollDirection } from '@/hooks';
import { HeaderButtons, HeaderWrapper } from './styled';
import { useAppContext } from '@/context';
import { useTheme, Z_INDEX_BUTTON } from '@/theme';
import { ButtonLanguage } from '@/i18n';
import { useEffect } from 'react';

const Header = () => {
  const { openNav } = useAppContext();
  const scrollDirection = useScrollDirection();
  const { isThemeLight, toggleTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 1000);
  }, []);

  return (
    <HeaderWrapper
      id='header'
      upScroll={scrollDirection === 'up'}
      downScroll={scrollDirection === 'down'}
      fixed={openNav}
    >
      <Container>
        <Row alignItems='center'>
          <Col xs={7} md={3}>
            <Stack>
              <NavToggler className='d-md-none' />
              <LogoTheme style={{ zIndex: 300 }} />
            </Stack>
          </Col>
          <Col xs={5} md={9}>
            <Stack justifyContent='flex-end'>
              <Nav />
              <HeaderButtons>
                <div>
                  <ButtonLanguage />
                </div>
                <div>
                  <SwitchTheme
                    active={!isThemeLight}
                    onClick={toggleTheme}
                    zIndex={Z_INDEX_BUTTON}
                  />
                </div>
                <div className='d-none d-lg-inline-block'>
                  <SocialNetworks />
                </div>
              </HeaderButtons>
            </Stack>
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
