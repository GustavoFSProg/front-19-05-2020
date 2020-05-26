import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar className="green-color" dark expand="md">
        <NavbarBrand href="/">GFS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">
                <text className="yellow-color">Home</text>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">
                <text className="yellow-color">Cadastro</text>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="yellow-color" nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/products">
                    <span className="fontes">Listagem</span>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/register">
                    {'    '} <span className="fontes"> {'    '}Cadastro</span>
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
