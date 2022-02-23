import {
    Popover,
    Button,
    Group,
    TextInput,
    Avatar,
    Text,
    ActionIcon,
    useMantineTheme,
  } from '@mantine/core';
  


const PopOverComponent = ({opened,setOpened,Icon,values,component,theme}) => {

    const onSubmit=(values) => {
        console.log(values);
        setOpened(false);
    }
    const onCancel= () => setOpened(false);


  return (
    <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        position="bottom"
        placement="end"
        title="Edit user"
        transition="pop-top-right"
        target={
            <ActionIcon
                variant={theme.colorScheme === 'dark' ? 'hover' : 'light'}
                onClick={() => setOpened((o) => !o)}
            >
                <Icon />
            </ActionIcon>
        }
        withCloseButton
  >

    {component({initialValues:values,onSubmit,onCancel})}

  </Popover>
  )
}

export default PopOverComponent