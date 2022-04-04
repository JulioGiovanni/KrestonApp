import React from 'react'
import {Center,Grid,Card,PasswordInput,TextInput,Button,Space,Anchor} from '@mantine/core';
import Image from 'next/image'
import Link from 'next/link'
import forgotPasswordImage from '../public/images/forgot-image.jpg'
const forgot = () => {
  return (
    <div>
        <Center style={{marginTop:'100px', backgroundColor:'#F1F3F5'}}>
            <div style={{width:"600px"}}>
                <Card shadow='md' padding='lg' radius="sm">
                    <Center>
                        <Grid>
                            <Grid.Col span={12}>
                                <Center>
                                    <Image src={forgotPasswordImage}/>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <TextInput
                                    label="Ingresa tu correo"
                                    description="Ingresa tu correo para recuperar tu contraseña"
                                    placeholder="email@email.com"
                                    radius={'sm'}
                                />
                                <Button color="green" radius="sm" fullWidth mt={"lg"}>
                                    Enviar Correo
                                </Button>
                                <Center mt={"lg"}>
                                    <Anchor component={Link} href="/login" underline={false}>
                                        ¿Ya tienes cuenta?
                                    </Anchor>
                                </Center>
                            </Grid.Col>
                        </Grid>
                    </Center>

                </Card>
            </div>
        </Center>
    </div>
  )
}

export default forgot