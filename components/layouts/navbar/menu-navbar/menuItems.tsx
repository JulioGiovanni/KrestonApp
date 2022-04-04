import {Menu,Text,Divider} from "@mantine/core"

export const menuItems = [
    <Menu.Label>Application</Menu.Label>,
        <Menu.Item >Settings</Menu.Item>,
        <Menu.Item >Messages</Menu.Item>,
        <Menu.Item >Gallery</Menu.Item>,
        <Menu.Item rightSection={<Text size="xs" color="dimmed">⌘K</Text>}>
            Search
        </Menu.Item>,

        <Divider />,

        <Menu.Label>Perfil</Menu.Label>,
        <Menu.Item >Mi Perfil</Menu.Item>,
        <Menu.Item color="red" >Cerrar Sesión</Menu.Item>,
];