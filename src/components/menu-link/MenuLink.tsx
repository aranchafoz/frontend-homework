type Props = {
  type?: '' | 'logout';
  text: string,
  icon: string,
  onClick: () => void,
}

const MenuLink = ({ type, icon, text, onClick }: Props) => (
  <div className={`nav__menu__link ${type}`} {...{ onClick }}>
    <i className="material-icons">
      {icon}
    </i>

    {text}
  </div>
)

export default MenuLink
