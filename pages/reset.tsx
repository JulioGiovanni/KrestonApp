
import {Center,Grid,Card,PasswordInput,TextInput,Button,Anchor} from '@mantine/core';
import Image from 'next/image'
import Link from 'next/link'
import resetPasswordImage from '../public/images/reset-image.jpg'

const reset = () => {
  return (
    <div>
        <Center style={{marginTop:'100px', backgroundColor:'#F1F3F5'}}>
            <div style={{width:"600px"}}>
                <Card shadow='md' padding='lg' radius="sm">
                    <Center>
                        <Grid>
                            <Grid.Col span={12}>
                                <Center>
                                    <Image src={resetPasswordImage}/>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <PasswordInput
                                    label="Ingresa tu contraseña"
                                    description="Ingresa tu nueva contraseña"
                                    placeholder="********"
                                    radius={'sm'}
                                />
                                <Button color="green" radius="sm" fullWidth mt={"lg"}>
                                    Cambiar contraseña
                                </Button>
                               
                            </Grid.Col>
                        </Grid>
                    </Center>

                </Card>
            </div>
        </Center>
    </div>
  )
}

export default reset