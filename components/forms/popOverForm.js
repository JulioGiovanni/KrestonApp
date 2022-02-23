import {Button,Group,TextInput,Anchor} from '@mantine/core';
import { useForm, useMediaQuery } from '@mantine/hooks';

const UserPopOverForm = ({ initialValues, onSubmit, onCancel }) => {

    const isMobile = useMediaQuery('(max-width: 755px');

    const form = useForm({
        initialValues,
        validationRules: {
          name: (value) => value.trim().length > 2,
          email: (value) => value.trim().length > 2,
        },
      });

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <TextInput
        required
        label="Name"
        placeholder="Name"
        style={{ minWidth: isMobile ? 220 : 300 }}
        value={form.values.name}
        onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
        error={form.errors.name}
        variant="default"
      />

      <TextInput
        required
        label="Email"
        placeholder="Email"
        style={{ minWidth: isMobile ? 220 : 300, marginTop: 15 }}
        value={form.values.email}
        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
        error={form.errors.email}
        variant="default"
      />

      <Group position="apart" style={{ marginTop: 15 }}>
        <Anchor component="button" color="gray" size="sm" onClick={onCancel}>
          Cancel
        </Anchor>
        <Button type="submit" size="sm">
          Save
        </Button>
      </Group>
    </form>
  )
}

export default UserPopOverForm