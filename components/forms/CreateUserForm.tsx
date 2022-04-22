import { FC } from 'react';

import { Anchor, Button, Group, NumberInput, PasswordInput, Select, TextInput } from '@mantine/core';
import { useForm, useMediaQuery } from '@mantine/hooks';


import AutoCompleteItem from '../select/CustomSelect';



// interface UserEditFormProps {
//     initialValues: { name: string; email: string };
//     onSubmit(values: { name: string; email: string }): void;
//     onCancel(): void;
//   }

interface UserEditFormProps {
    Form : any;
    setForm : any;
    areas: any;
    oficinas: any;
    roles: any;
    onSubmit(values: {  
        // nombre: string; 
        //                 correo: string;
        //                 area: string;
        //                 oficina: string;
        //                 rol: string;
        //                 contrasena: string;

                     }): any;
}





const CreateUserForm: FC<UserEditFormProps> = ({Form,setForm,areas,oficinas,roles,onSubmit}) => {
    console.log(areas)
    console.log(oficinas)
    console.log(roles)
        const isMobile = useMediaQuery('(max-width: 755px');

        const form = useForm({
            initialValues:{
                nombre:'',
                correo:'',
                contrasena:'',
                area:'',
                rol:'',
                oficina:'',
                telefono:0,
            },
            validationRules: {
            nombre: (value) => value.trim().length > 5,
            correo: (value) => value.trim().length > 6,
            contrasena: (value) => value.trim().length >= 6,
            area: (value) => value.trim().length > 1,
            rol: (value) => value.trim().length > 1,
            oficina: (value) => value.trim().length > 1,
            },
            
        });

  



    return (
        <form onSubmit={onSubmit(form)}>
        <TextInput
            required
            label="Nombre"
            name='nombre'
            id='nombre'
            placeholder="Juan Pérez"
            style={{ minWidth: isMobile ? 220 : 300 }}
            value={form.values.nombre}
            onChange={(event) => form.setFieldValue('nombre', event.currentTarget.value)}
            error={form.errors.nombre}
            variant="default"
        />
        {/* <NumberInput
            label="Teléfono"
            placeholder="1234567890"
            value={form.values.telefono}
            onChange={(event) => form.setFieldValue('telefono', event)}
        /> */}

        <TextInput
            required
            label="Correo"
            name='correo'
            id='correo'
            placeholder="email@email.com"
            style={{ minWidth: isMobile ? 220 : 300, marginTop: 15 }}
            value={form.values.correo}
            onChange={(event) => form.setFieldValue('correo', event.currentTarget.value)}
            error={form.errors.correo}
            variant="default"
        />

        <PasswordInput
            required
            label="Contraseña"
            name='contrasena'
            id='contrasena'
            placeholder="*******"
            style={{ minWidth: isMobile ? 220 : 300, marginTop: 15 }}
            value={form.values.contrasena}
            onChange={(event) => form.setFieldValue('contrasena', event.currentTarget.value)}
            error={form.errors.contrasena}
            variant="default"
        />
        <Select
            value={form.values.area}
            onChange={(event) => form.setFieldValue('area', event)}
            label="Escoge un área"
            placeholder="Áreas"
            name='area'
            id='area'
            itemComponent={AutoCompleteItem}
            data={areas}
            searchable
            maxDropdownHeight={400}
            nothingFound="Nobody here"
            clearable
            filter={(value, item) =>

                item.nombre.toLowerCase().includes(value.toLowerCase().trim())
            }
        />
        <Select
            value={form.values.rol}
            onChange={(event) => form.setFieldValue('rol', event)}
            label="Escoge un rol para este usuario"
            placeholder="Roles"
            itemComponent={AutoCompleteItem}
            data={roles}
            searchable
            maxDropdownHeight={400}
            nothingFound="Nobody here"
            clearable
            filter={(value, item) =>

                item.nombre.toLowerCase().includes(value.toLowerCase().trim())
            }
        />
        <Select
            value={form.values.oficina}
            onChange={(event) => form.setFieldValue('oficina', event)}
            label="Escoge una oficina"
            placeholder="Oficinas"
            itemComponent={AutoCompleteItem}
            data={oficinas}
            searchable
            maxDropdownHeight={400}
            nothingFound="Nobody here"
            clearable
            filter={(value, item) =>

                item.nombre.toLowerCase().includes(value.toLowerCase().trim())
            }
        />
        <Group position="apart" style={{ marginTop: 15 }}>
            <Anchor component="button" color="gray" size="sm" >
            Cancel
            </Anchor>
            <Button type="submit" size="sm">
                Guardar
            </Button>
        </Group>
        </form>
  )
}

export default CreateUserForm