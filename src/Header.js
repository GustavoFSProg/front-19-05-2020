import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './style.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const history = useHistory()

  return (
    <div>
      <Navbar className="green-color" dark expand="md">
        <NavbarBrand onClick={() => history.push('/')}>GFS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <div onClick={() => history.push('/')}>
                <text className="yellow-color">Home</text>
              </div>
            </NavItem>
            <NavItem>
              <div onClick={() => history.push('/register')}>
                <text className="yellow-color">Cadastro</text>
              </div>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="yellow-color" nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <div onClick={() => history.push('/products')}>
                    <span className="fontes">Listagem</span>
                  </div>
                </DropdownItem>
                <DropdownItem>
                  <div onClick={() => history.push('/register')}>
                    <span className="fontes">Cadastro</span>
                  </div>
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}
