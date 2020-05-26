import React, { useState } from 'react'
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
                <span className="yellow-color">Home</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">
                <span className="yellow-color">Cadastro</span>
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
