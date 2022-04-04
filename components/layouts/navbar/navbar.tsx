import { AppShell, Burger, Container, Header, MediaQuery, Navbar,ScrollArea, Space, useMantineTheme } from "@mantine/core"
import { useState } from "react"
import Links from "../../links/Links"
import Brand from "./brand/Brand"


import MenuNavbar from "./menu-navbar/MenuNavbar"


const CustomNavbar = ({children}) => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  return (
    <AppShell
        // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
        navbarOffsetBreakpoint="sm"
        // fixed prop on AppShell will be automatically added to Header and Navbar
        fixed
        style={{
        backgroundColor: '#F1F3F5',
        paddingTop:'30px'
        }}
        navbar={
        <Navbar
            // padding={{sm:"md","lg":"md"}}
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 200 }}
        >
            <Navbar.Section
            ml={-10}
            mr={-10}
            sx={{ paddingLeft: 20, paddingRight: 20 }}
            >
            <Space
                h={20}
            />

            </Navbar.Section>

            <Navbar.Section
            grow
            component={ScrollArea}
            ml={-10}
            mr={-10}
            sx={{ paddingLeft: 20, paddingRight: 20 }}
            >
            <Links/>
            </Navbar.Section>

        </Navbar>
        }
        header={
        <Header 
            height={80} 
            // padding="md"
        >
        {/* Handle other responsive styles with MediaQuery component or createStyles function */}
            <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent:"space-between",
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            }}>
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
        }
    >   

        <Container 
            // padding={'xs'}
        >
            {children}
        </Container>
    </AppShell>
  )
}

export default CustomNavbar