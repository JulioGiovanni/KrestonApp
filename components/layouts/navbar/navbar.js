import { Navbar,ScrollArea, useMantineTheme } from "@mantine/core"
import Links from "../links"


const customNavbar = (props) => {
  return (
    <Navbar
        {...props}
        padding="md"
        hiddenBreakpoint="sm"
        width={{ sm: 300, lg: 200 }}
        hidden={!opened}
    >
        <Navbar.Section>

        </Navbar.Section>

        <Navbar.Section
            grow
            component={ScrollArea}
            ml={-10}
            mr={-10}
            sx={{ paddingLeft: 10, paddingRight: 10 }}
        >
            <Links/>
        </Navbar.Section>

    
  </Navbar>
  )
}

export default customNavbar