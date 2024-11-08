import React from 'react'
import Modal from '../ui/modals'
import Input from '../input'
import Button from '../ui/button'

type ICreateGroup = {
  open: boolean
  onClose: () => void
}

const CreateGroup = ({open, onClose}: ICreateGroup) => {

  const [data, dataSet] = React.useState({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
  }
  return (
    <Modal open={open}>
      <div className='w-full text-right'>
        <span  onClick={onClose} className='text-[1.2rem] text-body-color-dark cursor-pointer'>X</span>
      </div>

      <Input label='Group Name' type='text' onChange={handleChange} value='sdfs' placeholder='Farmer Weekly COntribution' />

      <div className='w-full flex items-center justify-center'>
        <Button text='Submit' onClick={() => null} className='my-3 text-gray-600' />
      </div>
    </Modal>
  )
}

export default CreateGroup