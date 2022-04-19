import { Anchor, Button, Group, NumberInput, PasswordInput, Select, TextInput } from '@mantine/core';
import { useForm, useMediaQuery } from '@mantine/hooks';
import { FC } from 'react';
import AutoCompleteItem from '../select/CustomSelect';


// interface UserEditFormProps {
//     initialValues: { name: string; email: string };
//     onSubmit(values: { name: string; email: string }): void;
//     onCancel(): void;
//   }

interface UserEditFormProps {
    Form : any;
    setForm : any;
}


const CreateUserForm: FC<UserEditFormProps> = ({Form,setForm}) => {

        const isMobile = useMediaQuery('(max-width: 755px');

        const form = useForm({
            initialValues:{
                nombre:'',
                correo:'',
                contraseña:'',
                area:'',
                rol:'',
                oficina:'',
                telefono:0,
            },
            validationRules: {
            nombre: (value) => value.trim().length > 2,
            correo: (value) => value.trim().length > 2,
            contraseña: (value) => value.trim().length > 6,
            },
            
        });

        const data = [
            {
              image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
              label: 'Bender Bending Rodríguez',
              value: 'Bender Bending Rodríguez',
              description: 'Fascinated with cooking',
            },
          
            {
              image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
              label: 'Carol Miller',
              value: 'Carol Miller',
              description: 'One of the richest people on Earth',
            },
            {
              image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
              label: 'Homer Simpson',
              value: 'Homer Simpson',
              description: 'Overweight, lazy, and often ignorant',
            },
            {
              image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
              label: 'Spongebob Squarepants',
              value: 'Spongebob Squarepants',
              description: 'Not just a sponge',
            },
          ];



    return (
        <form onSubmit={form.onSubmit((values) => Form.push(values))}>
        <TextInput
            required
            label="Nombre"
            placeholder="Juan Pérez"
            style={{ minWidth: isMobile ? 220 : 300 }}
            value={form.values.nombre}
            onChange={(event) => form.setFieldValue('nombre', event.currentTarget.value)}
            error={form.errors.nombre}
            variant="default"
        />
        <NumberInput
            label="Teléfono"
            placeholder="1234567890"
            value={form.values.telefono}
            onChange={(event) => form.setFieldValue('telefono', event)}
        />

        <TextInput
            required
            label="Correo"
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
            placeholder="*******"
            style={{ minWidth: isMobile ? 220 : 300, marginTop: 15 }}
            value={form.values.contraseña}
            onChange={(event) => form.setFieldValue('contraseña', event.currentTarget.value)}
            error={form.errors.contraseña}
            variant="default"
        />
        <Select
            value={form.values.area}
            onChange={(event) => form.setFieldValue('area', event)}
            label="Escoge un área"
            placeholder="Áreas"
            itemComponent={AutoCompleteItem}
            data={data}
            searchable
            maxDropdownHeight={400}
            nothingFound="Nobody here"
            clearable
            filter={(value, item) =>
                item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
                item.description.toLowerCase().includes(value.toLowerCase().trim())
            }
        />
        <Select
            value={form.values.rol}
            onChange={(event) => form.setFieldValue('rol', event)}
            label="Escoge un rol para este usuario"
            placeholder="Roles"
            itemComponent={AutoCompleteItem}
            data={data}
            searchable
            maxDropdownHeight={400}
            nothingFound="Nobody here"
            clearable
            filter={(value, item) =>
                item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
                item.description.toLowerCase().includes(value.toLowerCase().trim())
            }
        />
        <Select
            value={form.values.oficina}
            onChange={(event) => form.setFieldValue('oficina', event)}
            label="Escoge una oficina"
            placeholder="Oficinas"
            itemComponent={AutoCompleteItem}
            data={data}
            searchable
            maxDropdownHeight={400}
            nothingFound="Nobody here"
            clearable
            filter={(value, item) =>
                item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
                item.description.toLowerCase().includes(value.toLowerCase().trim())
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