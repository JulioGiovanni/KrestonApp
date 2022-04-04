import {
    Popover,
    ActionIcon,
  } from '@mantine/core';
  


const PopOverComponent = ({opened,setOpened,Icon,values,Component,theme}) => {

    const onSubmit=(values) => {
        setOpened(false);
    }
    const onCancel = () => setOpened(false);


  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      position="bottom"
      placement="end"
      withCloseButton
      title="Editar usuario"
      transition="pop-top-right"
      target={
        <ActionIcon
          variant={theme.colorScheme === 'dark' ? 'hover' : 'light'}
          onClick={() => setOpened((o:boolean) => !o)}
        >
          <Icon />
        </ActionIcon>
      }
    >
      <Component
        initialValues={values}
        onCancel={() => setOpened(false)}
        onSubmit={(data) => {
          // setValues(data);
          setOpened(false);
        }}
      />
    </Popover>
  )
}

export default PopOverComponent