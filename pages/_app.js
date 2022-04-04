import { AppProps } from 'next/app';
import Head from 'next/head';
import { Container, MantineProvider, Space } from '@mantine/core';
import '../styles/globals.css';
import '@elastic/eui/dist/eui_theme_light.css';
// import '@elastic/eui/dist/eui_theme_dark.css';
import { useState } from 'react';
import { AppShell, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme,ScrollArea } from '@mantine/core';
import Links from '../components/links/links';
import MenuNavbar from '../components/layouts/navbar/menu-navbar/menuNavbar';
import Brand from '../components/layouts/navbar/brand/brand';
import { EuiProvider } from '@elastic/eui';

 


export default function App(props) {
  const { Component, pageProps } = props;
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  return (
    <>
      <Head>
        <title>Kreston CSM</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
      <EuiProvider colorMode="light">

    
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
              padding={{sm:"md","lg":"md"}}
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
            <Header height={80} padding="md">
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
      
      <Container padding={'xs'}>
        <Component {...pageProps} />
      </Container>
      
    </AppShell>
    </EuiProvider>
      </MantineProvider>
    </>
  );
}
