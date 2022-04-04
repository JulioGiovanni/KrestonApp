import { Autocomplete, Select } from '@mantine/core'
import { useForm } from '@mantine/hooks';
import { useRef, useState } from 'react';
import AutoCompleteItem from '../select/CustomSelect'


const Proyectos = () => {
    const selects = useForm({
        initialValues:{
            proyecto: '',
            anual: '',
            area: ''
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
    <>       
        <div style={{display:'flex',justifyContent:'space-evenly' }}>
            <Select
                style={{width:'250px'}}
                value={selects.values.proyecto}
                onChange={(e) => selects.setFieldValue('proyecto', e)}

                label="Escoge uno de los proyectos"
                placeholder="Proyectos"
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

            {selects.values.proyecto &&
            
                <Select
                    style={{width:'250px'}}
                    value={selects.values.anual}
                    onChange={(e) => selects.setFieldValue('anual', e)}
                    label="Escoge uno año"
                    placeholder="Años"
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
            }
            {selects.values.anual &&
            
                <Select
                    
                    value={selects.values.area}
                    onChange={(e) => selects.setFieldValue('area', e)}
                    style={{width:'250px'}}
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
            }
        </div> 
        
    </>
  )
}

export default Proyectos