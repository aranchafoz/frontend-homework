import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { createRef, RefObject } from 'react'


import { ReduxState } from '../../types'
import { getIsDropdownMenuVisible } from '../../redux/selectors'
import { toggleDropdownMenuVisibility } from '../../redux/actions'

import MenuLink from '../menu-link/MenuLink'
import Companies from '../companies/Companies'
import { useOutsideClick } from '../../hooks/use-click-outside';

type ReduxProps = {
  isDropdownMenuVisible: boolean,
}

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void,
}

const DropdownMenu = ({ isDropdownMenuVisible, toggleDropdownMenuVisibility }: ReduxProps & DispatchProps) => {

  const dropdownRef: React.RefObject<any> = createRef();
  useOutsideClick(dropdownRef, () => {
    if (isDropdownMenuVisible) {
      toggleDropdownMenuVisibility()
    }
  });

  return (
    <div ref={dropdownRef}>
      <Companies />

      <div>
        <MenuLink
          text="Get the mobile app"
          icon="phone_iphone"
        />

        <MenuLink
          text="Community"
          icon="people"
        />

        <MenuLink
          text="Knowledge base"
          icon="book"
        />
      </div>

      <div>
        <MenuLink
          text="Settings"
          icon="settings"
        />

        <MenuLink
          text="Log out"
          icon="exit_to_app"
        />
      </div>
    </div>
  )
}

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isDropdownMenuVisible: getIsDropdownMenuVisible,
  }),
  { toggleDropdownMenuVisibility }
)(DropdownMenu)