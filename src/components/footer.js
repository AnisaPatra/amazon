import React from 'react';
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import './footer.css';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return (
    <div>
      <div className="footer">
        <Container style={{ paddingBlock: "50px" }}>
          <Row>
            <Col >
              <b className="colHead">Get to Know Us</b>
              <br /><br />
              <ul className="lists">
                <li>
                  About Us
                </li>
                <li>
                  Careers
                </li>
                <li>
                  Press Releases
                </li>
                <li>
                  Amazon Cares
                </li>
                <li>
                  Gift a Smile
                </li>
              </ul>
            </Col>
            <Col>
              <b className="colHead">Connect with Us</b>
              <br /><br />
              <ul className="lists">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </Col>
            <Col>
              <b className="colHead">Make Money with Us</b>
              <br /><br />
              <ul className="lists">
                <li>Sell on Amazon</li>
                <li>Sell under Amazon Accelerator</li>
                <li>Amazon Global Selling</li>
                <li>Become an Affiliate</li>
                <li>Fulfillment by Amazon</li>
                <li>Advertise Your Products</li>
                <li>Amazon Pay on Merchants</li>
              </ul>
            </Col>
            <Col>
              <b className="colHead">Let Us Help You</b>
              <br /><br />
              <ul className="lists">
                <li>COVID-19 and Amazon</li>
                <li>Your Account</li>
                <li>Returns Centre</li>
                <li>100% Purchase Protection</li>
                <li>Amazon App Download</li>
                <li>Amazon Assistant Download</li>
                <li>Help</li>
              </ul>
            </Col>
          </Row>
          <hr className="line" />
          <Row style={{ marginLeft: "400px" }}>
            <img style={{ width: "100px" }} src="https://static.businessworld.in/article/article_extra_large_image/1597056012_CNRvas_amazon_dkblue_noto_email_v2016_us_main_CB468775337_.png"></img>
            <DropdownButton title="Languages">
              <Dropdown.Item href="#/action-1">English</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Tamil</Dropdown.Item>
            </DropdownButton>
          </Row>
        </Container>
      </div>
      <div className="below-footer">
        <Container style={{ paddingBlock: "50px" }}>
          <Row>
            <Col>
              <b className="colHead">AdeBooks</b>
              <br />
              <ul className="lists">
                <li>
                  Books, art & collectibles
                </li>
              </ul>
            </Col>
            <Col>
              <b className="colHead">AdeBooks</b>
              <br />
              <ul className="lists">
                <li>Books, art & collectibles</li>
              </ul>
            </Col>
            <Col>
              <b className="colHead">Amazon Web Services</b>
              <br />
              <ul className="lists">
                <li>Scalable Cloud</li>
                <li>Computing Services</li>
              </ul>
            </Col>
            <Col>
              <b className="colHead">Audible</b>
              <br />
              <ul className="lists">
                <li>Download</li>
                <li>Audio Books</li>
              </ul>
            </Col>
            <Col>
              <b className="colHead">DPReview</b>
              <br />
              <ul className="lists">
                <li>Digital</li>
                <li>Photography</li>
              </ul>
            </Col>
            <Col>
              <b className="colHead">IMDB</b>
              <br />
              <ul className="lists">
                <li>Movies, TV & Celebrities</li>
              </ul>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <b className="colHead">Shopbop</b>
              <br />
              <ul className="lists">
                <li>Designer</li>
                <li>Fashion Brands</li>
              </ul>
            </Col>
            <Col>
              <b className="colHead">Amazon Business</b>
              <br />
              <ul className="lists">
                <li>Everything For Your Business</li>
              </ul>
            </Col>
            <Col>
              <b className="colHead">Prime Now</b>
              <br />
              <ul className="lists">
                <li>2-Hour Delivery on Everyday Items</li>
              </ul>
            </Col>
            <Col>
              <b className="colHead">Amazon Prime Music</b>
              <br />
              <ul className="lists">
                <li>70 million songs, ad-free</li>
                <li>Over 9 million podcast episodes </li>
              </ul>
            </Col>
          </Row>
          <br/><br/>
          <Row style={{marginInlineStart:"150px"}}>
            <pre>Conditions of Use Sale    Privacy Notice    Interest-Based Ads    © 1996-2021, Amazon.com, Inc. or its affiliates
            </pre> 
          </Row>
        </Container>
      </div>
    </div>
  )

}

export default Footer