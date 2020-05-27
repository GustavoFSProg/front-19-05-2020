import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'
import './style.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
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
        <NavbarBrand className="NavLink" onClick={() => history.push('/')}>
          GFS
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>

             <NavLink className="NavLink" onClick={() => history.push('/')}>
                <text className="yellow-color">Home</text>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="NavLink"
                onClick={() => history.push('/register')}
              >
                <text className="yellow-color">Cadastro</text>

              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="yellow-color" nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink
                    className="NavLink"
                    onClick={() => history.push('/products')}
                  >
                    <span className="fontes">Listagem</span>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>

                  <NavLink
                    className="NavLink"
                    onClick={() => history.push('/register')}
                  >

                    <span className="fontes">Cadastro</span>
                  </NavLink>
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
