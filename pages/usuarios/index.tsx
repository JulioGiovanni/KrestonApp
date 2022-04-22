import Link from 'next/link';
import { ActionIcon, Button, Card, Group, Space, Table, Text, Title, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { FiEdit, FiPlus,FiEye} from "react-icons/fi";
import {  Prisma, PrismaClient, Usuario } from '@prisma/client';


import UserPopOverForm from '../../components/forms/PopOverForm';
import ModalComponent from '../../components/modals/ModalComponent';
import CreateUserForm from '../../components/forms/CreateUserForm';
import PopOverComponent from '../../components/forms/popOverComponent';

const prisma = new PrismaClient();

export const getServerSideProps = async () => {

  const users = await prisma.usuario.findMany({
    
    include: {
      rol: {
        select:{
          nombre:true
        }
      },
      oficina: {
        select:{
          nombre:true
        }
      },
      area: {
        select:{
          nombre:true
        }
      }
    }
   
  })
  const areas = await prisma.area.findMany({});
  const oficinas = await prisma.oficina.findMany({});
  const roles = await prisma.role.findMany({});

  return { props:  {
    users:JSON.parse(JSON.stringify(users)),
    areas:JSON.parse(JSON.stringify(areas)),
    oficinas:JSON.parse(JSON.stringify(oficinas)),
    roles:JSON.parse(JSON.stringify(roles))
  }}
}


const onCreateNewUser = async (values:any) => {
  const {nombre,correo,contrasena,rol,oficina,area} = values;



  const user: Usuario = await prisma.usuario.create({
    data: {
      nombre,
      correo,
      contrasena,
      rol: {
        connect: {
          id: rol
        }
      },
      oficina: {
        connect: {
          id: oficina
        }
      },
      area: {
        connect: {
          id: area
        }
      },
      
    }
  });
  return user;
}



const UsuariosIndex = ({users,areas,oficinas,roles}:any) => {
    const [values, setValues] = useState({ name: 'Bob Handsome', email: 'bob@handsome.inc' });
    const [opened, setOpened] = useState(false);
    const [openedModal, setOpenedModal] = useState(false);
    const theme = useMantineTheme();

    

    const ths = (
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Rol</th>
          <th>Oficina</th>
          <th>Area</th>
          <th>Acciones</th>
        </tr>
      );

      const rows = users.map((user:any) => (
        <tr key={user.id}>
          <td>{user.nombre}</td>
          <td>{user.correo}</td>
          <td>{user.rol.nombre}</td>
          <td>{user.oficina.nombre}</td>
          <td>{user.area.nombre}</td>
          <td>
            <Group>
              {/* Edit Component */}
              <PopOverComponent
                  opened={opened}
                  setOpened={setOpened}
                  Icon={FiEdit}
                  values={values}
                  Component={UserPopOverForm}
                  theme={theme}
              />
              {/* End Edit Component */}

              {/* Delete Component */}
              <Link href={`/usuarios/${user.id}`} passHref> 
                <ActionIcon 
                  variant={theme.colorScheme === 'dark' ? 'hover' : 'light'}
                  // component={Link} 
                  >
                  <FiEye />
                </ActionIcon>
              </Link>
              {/* End Delete Component */}

            </Group>
          </td>
        </tr>
      ));

      

  return (
      <>
        <ModalComponent
          opened={openedModal}
          setOpened={setOpenedModal}
          title="Agregar usuario"
          Component={CreateUserForm}
          componentProps={{
            areas,
            oficinas,
            roles
          }}
        />
        <Card>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <Title order={2} >Usuarios</Title>
                <Button 
                  leftIcon={<FiPlus/>} 
                  onClick={() => setOpenedModal(true)}
                >  
                    <Text>Agregar usuario</Text>
                </Button>
            </div>
            <Space h={30}/>
            <Table highlightOnHover={true}>
                <thead>{ths}</thead>
                <tbody>{rows}</tbody>
                <tfoot>{ths}</tfoot>
            </Table>
        </Card>
      </>
    
  )


}

export default UsuariosIndex