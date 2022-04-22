import { forwardRef, LegacyRef } from 'react';
import { Avatar, Group,Text } from "@mantine/core";


interface Props {
  image:any,
  label:any,
  nombre:string,
}

const AutoCompleteItem = forwardRef(
    ({ image, label, nombre, ...others }: Props, ref:LegacyRef<HTMLDivElement>) => (
      <div ref={ref} {...others}>
        <Group noWrap>
          <Avatar src={image} />
  
          <div>
            <Text>{nombre}</Text>
            <Text size="xs" color="dimmed">

            </Text>
          </div>
        </Group>
      </div>
    )
  );



  export default AutoCompleteItem;