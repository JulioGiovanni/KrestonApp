import { CustomButton } from "../../components/buttons/CustomButton"
import { FiPlus } from "react-icons/fi";
import { Avatar, Button, Card, Grid, Space, Text, Title } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";

import ModalComponent from "../../components/modals/ModalComponent";
import UserPopOverForm from '../../components/forms/PopOverForm';
const prisma = new PrismaClient();
export const getServerSideProps = async () => {

    const oficinas = await prisma.oficina.findMany({
    })
    return { props:  {oficinas:JSON.parse(JSON.stringify(oficinas))}  }
  }


const index = ({oficinas}:any) => {
    const [openedModal, setOpenedModal] = useState(false)
  return (
    <>

        <ModalComponent
            opened={openedModal}
            setOpened={setOpenedModal}
            title="Agregar usuario"
            Component={UserPopOverForm}
            componentProps={{
                initialValues: {},
                onSubmit: () => {
                  setOpenedModal(false);
                },
                onCancel: () => setOpenedModal(false)

            }}
        />
         <div style={{display:'flex', justifyContent:'space-between'}}>
                <Title order={2} >Oficinas</Title>
                <Button 
                  leftIcon={<FiPlus/>} 
                  onClick={() => setOpenedModal(true)}
                >  
                    <Text>Agregar área</Text>
                </Button>
            </div>
            <Space h={30}/>

        <Grid>
            {oficinas.map((area:any) => {
                //Get the first letter of every word in the name
                const initials = area.nombre.split(" ").map((word:any) => word[0]).join("");

                return(
                    <Grid.Col sm={12} md={6} lg={4}>
                        

                            <Card style={{ height:150, padding:40}}>
                                
                                <Card.Section>

                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <Title order={3}>{area.nombre}</Title>

                                            <Avatar radius="xl" size={'lg'}>
                                                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                                    <Text color={'black'} weight={'bold'}>{initials}</Text>
                                                    <Text size='xs' color={'dimmed'}>{area.oficina}</Text>
                                                </div>
                                            </Avatar>

                                    </div>

                                </Card.Section>

                                <Card.Section mt={20}>
                                    <Link href={`/oficinas/${area.id}`} passHref>
                                        <Button fullWidth>
                                            Ver Más
                                        </Button>
                                    </Link>
                                </Card.Section>
                            
                            </Card>

                        
                    </Grid.Col>
                )
            })}
        </Grid>
    </>
  )
}

export default index