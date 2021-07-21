import { shallow } from 'enzyme'
import { Companies } from './Companies'
import * as redux from "react-redux";

describe('<Companies />', () => {
  const useDispatchMock = jest.spyOn(redux, 'useDispatch')
  const companies = [
    { id: 1, name: 'Dummy company' },
    { id: 2, name: 'Smarty company' },
  ]

  const render = () => shallow(
    <Companies companies={companies} />
  )

  beforeEach(() => {
    useDispatchMock.mockClear()
  })

  it('renders list of company links', () => {
    expect(render()).toMatchSnapshot()
  })

  it('renders list of companies does not call useDispatch', function(){
    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)

    //action
    render()

    //assert
    expect(dummyDispatch).not.toHaveBeenCalled()
  })

  it('renders list of companies call useDispatch', function(){
    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)

    //action
    const component = render()
    component.find('[data-test-company-link-1]').simulate('click')

    //assert
    expect(dummyDispatch).toHaveBeenCalled()
  })
})
