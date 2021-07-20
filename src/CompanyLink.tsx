import { Company } from './types'

type Props = {
  onClick: (id: number) => void;
}

const CompanyLink = ({ id, name, onClick }: Company & Props) => (
  <div onClick={() => onClick(id)}>{name}</div>
)

export default CompanyLink
