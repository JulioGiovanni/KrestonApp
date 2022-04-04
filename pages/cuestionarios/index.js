import  { useState } from 'react';
import { Button, Card, Text, Title } from '@mantine/core'
import { FiPlus } from 'react-icons/fi'
import {
    EuiDragDropContext,
    EuiDraggable,
    EuiDroppable,
    EuiFlexGroup,
    EuiFlexItem,
    EuiIcon,
    EuiPanel,
    euiDragDropReorder,
    htmlIdGenerator,
  } from '@elastic/eui';

  
  const makeId = htmlIdGenerator();
  
  const makeList = (number, start = 1) =>
    Array.from({ length: number }, (v, k) => k + start).map((el) => {
      return {
        content: `Item ${el}`,
        id: makeId(),
      };
    });

const index = () => {

    const [list, setList] = useState(makeList(5));
    const onDragEnd = ({ source, destination }) => {
      if (source && destination) {
        const items = euiDragDropReorder(list, source.index, destination.index);
  
        setList(items);
      }
    };


  return (
    <Card>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <Title order={2}>Cuestionarios</Title>
            <Button 
                leftIcon={<FiPlus/>} 
                onClick={() => setOpenedModal(true)}
            >  
                <Text>Agregar pregunta</Text>
            </Button>
        </div>



        <EuiDragDropContext onDragEnd={onDragEnd}>
            <EuiDroppable
            droppableId="CUSTOM_HANDLE_DROPPABLE_AREA"
            spacing="m"
            withPanel
            >
            {list.map(({ content, id }, idx) => (
                <EuiDraggable
                    spacing="m"
                    key={id}
                    index={idx}
                    draggableId={id}
                    customDragHandle={true}
                    hasInteractiveChildren={true}
                >
                {(provided) => (
                    <EuiPanel paddingSize="s">
                    <EuiFlexGroup alignItems="center" gutterSize="s">
                        <EuiFlexItem grow={false}>
                        <EuiPanel
                            color="transparent"
                            paddingSize="s"
                            {...provided.dragHandleProps}
                            aria-label="Drag Handle"
                        >
                            <EuiIcon type="grab" />
                        </EuiPanel>
                        </EuiFlexItem>
                        <EuiFlexItem>{content}</EuiFlexItem>
                    </EuiFlexGroup>
                    </EuiPanel>
                )}
                </EuiDraggable>
            ))}
            </EuiDroppable>
        </EuiDragDropContext>



    </Card>
  )
}

export default index



 