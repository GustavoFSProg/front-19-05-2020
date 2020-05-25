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
              <NavLink href="https://celke.com.br/">
                <text className="yellow-color">Home</text>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="yellow-color"
                href="https://github.com/reactstrap/reactstrap"
              >
                Cadatro
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="yellow-color" nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Teste 1 </DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}
