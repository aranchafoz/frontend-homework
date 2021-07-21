import { shallow } from 'enzyme'
import DropdownMenu from './DropdownMenu'

describe('<DropdownMenu />', () => {
  const toggleDropdownMenuVisibilityMock = jest.fn()

  const render = () => shallow(
    <DropdownMenu
      toggleDropdownMenuVisibility={toggleDropdownMenuVisibilityMock}
    />
  )
  it('renders menu', () => {
    expect(render()).toMatchSnapshot()
  })
})
