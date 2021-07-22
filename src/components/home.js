import React from 'react';
import Header from './header';
import Footer from './footer';
import { Carousel, CarouselItem, Row, Col, Card } from 'react-bootstrap';

/**
* @author
* @function Home
**/

const Home = (props) => {
  return (
    <div>
      <Header />
      <Carousel fade indicators={false} style={{ marginLeft: "9px"}}>
        <Carousel.Item>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_SVA._CB667240774_.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/Events/June/MSD1/RedmiNote10S/D24311141_MSD_WLD_RedmiNote10S_DesktopTallHero_1500X600._CB667762214_.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/OnePlusNordNewLaunch/11thJune/livenow/D23753221_OnePlus_Nord_New_launch_GW_Design_SIM_Tall_hero_1500x600_3._CB665877485_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        </Carousel>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
          </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      <Footer />
    </div>
  )

}

export default Home