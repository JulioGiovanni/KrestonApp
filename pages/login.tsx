import {Center,Grid,Card,PasswordInput,TextInput,Button,Space,Anchor, Text} from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import loginImage from '../public/images/login-image.png';





const login = () => {
  return (
    <Center style={{marginTop:'150px', backgroundColor:'#F1F3F5'}}>
        <div style={{width:"800px"}}>
            <Card shadow="md" padding="lg" radius="sm">
                <Grid>
                    <Grid.Col span={6}>
                        <Image src={loginImage} alt="Login"  height={'400px'}/>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Text size='xl' align='center'><b>Bienvenido</b></Text>
                        <Text size='xl' align='center'>Inicie Sesión para continuar</Text>

                        <TextInput
                            // icon={<MailIcon />}
                            label="Correo"
                            placeholder="email@email.com"
                            radius="sm"
                            required
                        />
                        <Space h="md"/>
                        <PasswordInput
            
                            placeholder="Contraseña"
                            label="Contraseña"
                            radius="sm"
                            required
                        />
                        <Link href="/dashboard" passHref>
                            <Button color="green" radius="sm" fullWidth mt={"lg"} component="a">Iniciar Sesión</Button>
                        </Link>


                        <Center mt={"lg"}>
                            <Anchor component={Link} href="/forgot" underline={false}>
                                ¿Olvidaste tu contraseña?
                            </Anchor>
                        </Center>
                    </Grid.Col>
                </Grid>
            </Card>
        </div>

    </Center>
  )
}

export default login;