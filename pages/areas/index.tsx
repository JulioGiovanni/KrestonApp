import { CustomButton } from "../../components/buttons/CustomButton"
import { FiPlus } from "react-icons/fi";
import { Avatar, Button, Card, Grid, Space, Text, Title } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import UserPopOverForm from "../../components/forms/popOverForm";
import ModalComponent from "../../components/modals/ModalComponent";
const areas = [
    {nombre: 'Auditoría',   id: 1, oficina:'GDL'},
    {nombre: 'Auditoría',   id: 2, oficina:'CDJ'},
    {nombre: 'Impuestos',   id: 3, oficina:'GDL'},
    {nombre: 'Impuestos',   id: 4, oficina:'CDJ'},
    {nombre: 'Consultoría', id: 5, oficina:'GDL'},
    {nombre: 'Consultoría', id: 6, oficina:'CDJ'},
    {nombre: 'Contraloría', id: 7, oficina:'GDL'},
    {nombre: 'Contraloría', id: 8, oficina:'CDJ'},
]
const index = () => {
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
                <Title order={2} >Áreas</Title>
                <Button 
                  leftIcon={<FiPlus/>} 
                  onClick={() => setOpenedModal(true)}
                >  
                    <Text>Agregar área</Text>
                </Button>
            </div>
            <Space h={30}/>

        <Grid>
            {areas.map((area) => {
                //Get the first letter of every word in the name
                const initials = area.nombre.split(" ").map((word) => word[0]).join("");

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
                                    <Link href={`/areas/${area.id}`} passHref>
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