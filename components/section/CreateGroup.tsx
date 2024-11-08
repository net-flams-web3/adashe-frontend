import React from 'react'
import Modal from '../ui/modals'
import Input from '../input'
import Button from '../ui/button'
import { ICreateGroupData } from '@/interfaces/group'

type ICreateGroup = {
  open: boolean
  onClose: () => void
}

const CreateGroup = ({open, onClose}: ICreateGroup) => {

  const [data, dataSet] = React.useState<ICreateGroupData>({
    amount: 0,
    cycle: "",
    emergency_pool: 0,
    group_name: "",
    maximum_member: 0
  })
  const [error, errorSet] = React.useState({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    dataSet(prev => ({...prev, [name]: value}))
  }
  return (
    <Modal open={open}>
      <div className='w-full text-right'>
        <span  onClick={onClose} className='text-[1.2rem] text-body-color-dark cursor-pointer'>X</span>
      </div>

      <Input label='Group Name' type='text' onChange={handleChange} value={data.group_name} placeholder='Farmer Weekly Contribution' className='my-2' />
      <Input label='Contribution Amount (ALGO)' type='text' onChange={handleChange} value={data.amount?.toString()} placeholder='2000' className='my-2' />
      <Input label='Cycle Length (Days)' type='text' onChange={handleChange} value={data.cycle?.toString()} placeholder='7' className='my-2' />
      <Input label='Maximum Members' type='text' onChange={handleChange} value={data.maximum_member?.toString()} placeholder='20' className='my-2' />
      <Input label='Emergency Pool Percentage' type='text' onChange={handleChange} value={data.emergency_pool?.toString()} placeholder='50%' className='my-2' />

      <div className='w-full flex items-center justify-center'>
        <Button text='Submit' onClick={() => null} className='my-3 text-gray-600' />
      </div>
    </Modal>
  )
}

export default CreateGroup