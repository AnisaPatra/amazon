import React from 'react'
import { Dropdown, Navbar, DropdownButton, InputGroup, Col , Row} from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';
import './header.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#231f20" }}>
        <button className="header-button">
          <img style={{ width: "150px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSseyRskoPAtnJfkki3j-jLr86rGFW-7OPw2xeRVboiJQUWU9qDOjYSk0NtUaQlZaaO22g&usqp=CAU"></img>
        </button>
        <button className="header-button">
          <table style={{ border: "0" }}>
            <tr>
              <td>
                <MDBIcon className="grey-text" icon="map-marker-alt" />
              </td>
              <td style={{ width: "150px", color: "white", fontSize: "13px" }}>
                <p>Select a location to see product availability</p>
              </td>
            </tr>
          </table>
        </button>
          <InputGroup style={{width:"auto"}}>
            <InputGroup.Prepend>
            <DropdownButton title="All" variant="dark" className="drp-btn">
              <Dropdown.Item>All Categories</Dropdown.Item>
              <Dropdown.Item>Deals</Dropdown.Item>
              <Dropdown.Item>Books</Dropdown.Item>
              <Dropdown.Item>Car & Motorbike</Dropdown.Item>
              <Dropdown.Item>Clothing & Accessories</Dropdown.Item>
              <Dropdown.Item>Collectibles</Dropdown.Item>
            </DropdownButton>
            </InputGroup.Prepend>
            <input style={{ width: "700px", height: "40px", marginBlockStart:"6px" }}></input>
            <InputGroup.Append>
            <span style={{ backgroundColor: "#febd69", width: "50px", height: "40px",marginBlockStart:"6px", padding: "2px", display: "inline-block" }}>
              <MDBIcon icon="search" size="lg" style={{paddingLeft:"9px", paddingTop:"8px"}}/>
            </span>
            </InputGroup.Append>
          </InputGroup>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="header-right-button">
          Hello, <br/>Sign in
          </button>
          <button className="header-right-button">
          Return <br/>& Orders
          </button>
          <button className="header-right-button">
          <MDBIcon icon="shopping-cart" />
          Cart
          </button>
      </Navbar>
      <Navbar style={{paddingInlineStart:"30px"}} className="lower-header">
        <table cellPadding="15px">
          <tr>
          <td>Best Sellers</td>
          <td>Mobiles</td>
          <td>Prime</td>
          <td>Electronics</td>
          <td>Fashion</td>
          <td>New Releases</td>
          <td>Customer Service</td>
          <td>Amazon Pay</td>
          <td>Computers</td>
          <td>Home & Kitchen</td>
          <td>Today's Deals</td>
          <td>Exciting Offers</td>
          <td>New</td>
          </tr>
        </table>
      </Navbar>
    </div>
  )

}

export default Header