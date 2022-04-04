import { forwardRef, LegacyRef } from 'react';
import { Avatar, Group,Text } from "@mantine/core";


interface Props {
  image,
  label,
  description,
}

const AutoCompleteItem = forwardRef(
    ({ image, label, description, ...others }: Props, ref:LegacyRef<HTMLDivElement>) => (
      <div ref={ref} {...others}>
        <Group noWrap>
          <Avatar src={image} />
  
          <div>
            <Text>{label}</Text>
            <Text size="xs" color="dimmed">
              {description}
            </Text>
          </div>
        </Group>
      </div>
    )
  );



  export default AutoCompleteItem;