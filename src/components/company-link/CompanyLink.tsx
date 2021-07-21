import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Company, ReduxState } from '../../types'
import { getCompanySelected } from '../../redux/selectors'
import { useMemo } from 'react'

type ReduxProps = {
  selectedCompany: Company | undefined,
}

type Props = {
  onClick: (id: number) => void;
}

const CompanyLink = ({ id, name, onClick, selectedCompany }: Company & Props & ReduxProps) => {
  
  const isSelected = useMemo(() => selectedCompany?.id === id, [selectedCompany, id]);

  return (
    <button
      className={`nav__menu__companies-link ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(id)}
    >
      {name}
      {isSelected && (
        <i className="material-icons">check</i>
      )}
    </button>
  )
}

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    selectedCompany: getCompanySelected,
  }),
)(CompanyLink)
