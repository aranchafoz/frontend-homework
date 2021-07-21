import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Company, ReduxState } from '../../types'
import { getIsDropdownMenuVisible, getCompanySelected } from '../../redux/selectors'
import { toggleDropdownMenuVisibility } from '../../redux/actions'

import DropdownMenu from '../dropdown-menu/DropdownMenu'

type ReduxProps = {
  isDropdownMenuVisible: boolean,
  selectedCompany: Company | undefined,
}

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void,
}

export const DropdownLink = ({ isDropdownMenuVisible, toggleDropdownMenuVisibility, selectedCompany }: ReduxProps & DispatchProps) => (
  <>
    <div className="nav__link" onClick={toggleDropdownMenuVisibility} data-test-nav-link>
      <div className="nav__link-text-wrapper">
        <div className="nav__link-text">
          Elon Musk
        </div>

        <div className="nav__link-subtext">
          {selectedCompany?.name ?? ''}
        </div>
      </div>

      <i className="material-icons-outlined nav__link-icon">
        settings
      </i>
    </div>

    {isDropdownMenuVisible && <DropdownMenu />}
  </>
)

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isDropdownMenuVisible: getIsDropdownMenuVisible,
    selectedCompany: getCompanySelected,
  }),
  { toggleDropdownMenuVisibility }
)(DropdownLink)
