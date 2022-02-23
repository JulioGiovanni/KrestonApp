import Link from 'next/link';
import { ActionIcon, Button, Card, Group, Space, Table, Text, Title, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { FiEdit, FiPlus,FiEye} from "react-icons/fi";
import UserPopOverForm from '../../components/forms/popOverForm';
import PopOverComponent from '../../components/forms/popOverComponent';
import ModalComponent from '../../components/modals/ModalComponent';
import CustomLink from '../../components/links/CustomLink';




const UsuariosIndex = () => {
    const [values, setValues] = useState({ name: 'Bob Handsome', email: 'bob@handsome.inc' });
    const [opened, setOpened] = useState(false);
    const [openedModal, setOpenedModal] = useState(false);
    const theme = useMantineTheme();

    const elements = [
        { id:1,nombre: 'Marco Carrillo', correo: "email@email.com", rol: 'Admin', telefono: 1234567890 },
        { id:2,nombre: 'Saulo Lomelí', correo: "email@email.com", rol: 'Auditor', telefono: 1234567890 },
        { id:3,nombre: 'Aracely Flores', correo: "email@email.com", rol: 'Contador', telefono: 1234567890 },
        { id:4,nombre: 'Giovanni Flores', correo: "email@email.com", rol: 'Admin', telefono: 1234567890 },
        { id:5,nombre: 'Mónica Zermeño', correo: "email@email.com", rol: 'Contador', telefono: 1234567890 },
      ];

    const ths = (
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Rol</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      );

      const rows = elements.map((element) => (
        <tr key={element.id}>
          <td>{element.nombre}</td>
          <td>{element.correo}</td>
          <td>{element.rol}</td>
          <td>{element.telefono}</td>
          <td>
            <Group>
              <PopOverComponent
                  opened={opened}
                  setOpened={setOpened}
                  Icon={FiEdit}
                  values={values}
                  component={UserPopOverForm}
                  theme={theme}
              />
              <Link href={`/usuarios/${element.id}`} passHref> 
                <ActionIcon 
                  variant={theme.colorScheme === 'dark' ? 'hover' : 'light'}
                  // component={Link} 
                  >
                  <FiEye />
                </ActionIcon>
              </Link>
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
            Component={UserPopOverForm}
            componentProps={{
                initialValues: values,
                onSubmit: (values) => {
                  setValues(values);
                  setOpenedModal(false);
                },
                onCancel: () => setOpened(false)

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