import { connect, useDispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReduxState, Company } from './types'
import { getCompanies } from './selectors'
import { setSelectedCompanyId, toggleDropdownMenuVisibility } from './actions'

import CompanyLink from './CompanyLink'

type ReduxProps = {
  companies: Array<Company>,
}

type DispatchProps = {
  setSelectedCompanyId: (id: number) => void,
  toggleDropdownMenuVisibility: () => void,
}

export const Companies = ({ companies }: ReduxProps & DispatchProps) => {

  const dispatch = useDispatch();

  function handleSelectCompany(id: number) {
    dispatch(setSelectedCompanyId(id));
    dispatch(toggleDropdownMenuVisibility());
  }

  return (
    <>
      <div>Your companies</div>

      {companies.map((company) => (
        <CompanyLink
          key={company.id}
          {...company}
          onClick={(id) => handleSelectCompany(id)}
        />
      ))}
    </>
  )
}

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    companies: getCompanies,
  }),
  {
    setSelectedCompanyId,
    toggleDropdownMenuVisibility,
  }
)(Companies)
