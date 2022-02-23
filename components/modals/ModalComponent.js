import { Modal } from "@mantine/core"



const ModalComponent = ({opened,setOpened,title,Component,componentProps}) => {
  return (
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={title}
      >
        {Component({...componentProps})}
      </Modal>
  )
}

export default ModalComponent