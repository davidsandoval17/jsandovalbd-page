import {
  Button,
  Col,
  Container,
  Row,
  SiGmail,
  HiOutlineDocumentText,
  Tag,
  Typography,
  BsWhatsapp,
} from '@/components';
import random1 from '@/assets/img/mokups/random1.png';
import { BackgroundBanner, ImageAnimated } from './styled';
import configContact from '@/config/contact';
import Wave from './Wave';
import HandSlider from './HandSlider';
import { useTranslation } from 'react-i18next';
import TypewriterComponent from 'typewriter-effect';

const BannerMain = () => {
  const { t } = useTranslation();

  return (
    <BackgroundBanner id='inicio'>
      <ImageAnimated>
        <img src={random1} alt='' />
      </ImageAnimated>
      <Container>
        <Row className='align-items-center g-5'>
          <Col lg={6} className='text-center text-lg-start'>
            <Tag label={t('bannerMain.title.tag')} size='sm' />
            <Typography
              as='h1'
              size='4xl'
              color='headline-1'
              className='my-3 my-md-4'
            >
              {t('bannerMain.title.headline.presentation')}
              <br />
              <Typography
                size='5xl'
                as='b'
                isGradient
                className='d-inline-block pt-3'
              >
                <TypewriterComponent
                  options={{
                    strings: [
                      t('bannerMain.title.headline.strings.developer'),
                      t('bannerMain.title.headline.strings.designer'),
                    ],
                    loop: true,
                    autoStart: true,
                  }}
                />
              </Typography>
            </Typography>
            <Typography>{t('bannerMain.paragraph')}</Typography>
            <div className='mt-5 d-flex flex-column gap-3 flex-sm-row justify-content-center justify-content-lg-start'>
              <Button
                as='a'
                href={configContact.socialNetworks[3].url}
                variant='contained'
                target='_blank'
              >
                <BsWhatsapp /> Whatsapp
              </Button>
              {/* <Button
                as='a'
                href={`mailto:${configContact.gmail}`}
                variant='contained'
              >
                {t('bannerMain.button')} <SiGmail />
              </Button> */}
              <Button
                as='a'
                variant='outlined'
                href='https://docs.google.com/document/d/1m1wuWSS309PRY7Hfp_C-4A7_rNtf_tSQOorJsffuaaA/edit?usp=sharing'
                target='_blank'
              >
                <HiOutlineDocumentText /> Curriculum
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <HandSlider />
          </Col>
        </Row>
      </Container>
      <Wave />
    </BackgroundBanner>
  );
};

export default BannerMain;
