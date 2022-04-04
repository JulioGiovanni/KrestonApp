import { forwardRef, Ref } from 'react';
import { ChevronRightIcon } from '@modulz/radix-icons';
import { Group, Avatar, Text, UnstyledButton } from '@mantine/core';

interface Props {
  image, 
  name, 
  email, 
  icon?
}

const UserButton = forwardRef(
  ({ image, name, email, icon, ...others }: Props, ref:Ref<HTMLButtonElement>) => (
    
    <UnstyledButton
      ref={ref}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
            {/* Nombre de prueba */}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
            {/* email@email.com */}
          </Text>
        </div>

        {icon || <ChevronRightIcon />}
      </Group>
    </UnstyledButton>
  )
);

export default UserButton;