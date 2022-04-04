import { useState } from "react";
import { Header, MediaQuery,Burger, useMantineTheme } from "@mantine/core";

import MenuNavbar from "../navbar/menu-navbar/MenuNavbar"
import Brand from "../navbar/brand/Brand"


const CustomHeader = (props) => {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
  return (
    <Header {...props}>
    {/* Handle other responsive styles with MediaQuery component or createStyles function */}
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[1]}
                    mr="xl"
                />
            </MediaQuery>
            <Brand/>
            <MenuNavbar/>
        </div>
    </Header>
  )
}

export default CustomHeader