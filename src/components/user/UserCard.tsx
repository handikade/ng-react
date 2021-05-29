import React from 'react'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined'
import CallOutlinedIcon from '@material-ui/icons/CallOutlined'

type Props = {
  name: string
  email: string
  phone: string
}

const UserCard: React.FC<Props> = ({ name, email, phone }: Props) => {
  return (
    <div className="py-1 px-2 rounded border border-gray-300 mb-2">
      <div className="text-lg font-bold">{name}</div>
      <div>
        <div className="text-sm">
          <MailOutlineOutlinedIcon fontSize="inherit" /> {email}
        </div>
        <div className="text-sm">
          <CallOutlinedIcon fontSize="inherit" /> {phone}
        </div>
      </div>
    </div>
  )
}

export default UserCard
