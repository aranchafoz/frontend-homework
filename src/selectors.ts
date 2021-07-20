import { ReduxState, Company } from './types'

export const getIsDropdownMenuVisible = (state: ReduxState) =>
  state.isDropdownMenuVisible

export const getCompanySelected = (state: ReduxState) =>
  state.companies.find(e => e.id === state.selectedCompanyId)

export const getCompanySelectedId = (state: ReduxState) =>
  state.selectedCompanyId

export const isCompanySelected = (state: ReduxState, props: { company: Company }) => 
  state.selectedCompanyId === props.company.id

export const getCompanies = (state: ReduxState) =>
  state.companies
