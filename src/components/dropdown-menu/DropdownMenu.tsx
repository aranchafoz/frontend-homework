import { connect } from 'react-redux'
import { createRef, RefObject } from 'react'


import { toggleDropdownMenuVisibility } from '../../redux/actions'

import MenuLink from '../menu-link/MenuLink'
import Companies from '../companies/Companies'
import { useOutsideClick } from '../../hooks/use-click-outside';

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void,
}

const DropdownMenu = ({ toggleDropdownMenuVisibility }: DispatchProps) => {

  const dropdownRef: RefObject<any> = createRef();
  useOutsideClick(dropdownRef, () => toggleDropdownMenuVisibility());

  function handleLinkClick() {
    toggleDropdownMenuVisibility()
  }

  return (
    <div ref={dropdownRef} className="nav__menu">
      <Companies />

      <div>
        <MenuLink
          text="Get the mobile app"
          icon="phone_iphone"
          onClick={handleLinkClick}
        />

        <MenuLink
          text="Community"
          icon="people"
          onClick={handleLinkClick}
        />

        <MenuLink
          text="Knowledge base"
          icon="book"
          onClick={handleLinkClick}
        />
      </div>

      <div>
        <MenuLink
          text="Settings"
          icon="settings"
          onClick={handleLinkClick}
        />

        <MenuLink
          type="logout"
          text="Log out"
          icon="exit_to_app"
          onClick={handleLinkClick}
        />
      </div>
    </div>
  )
}

export default connect(
  null,
  { toggleDropdownMenuVisibility }
)(DropdownMenu)