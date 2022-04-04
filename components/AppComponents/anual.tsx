import { Autocomplete, Select } from '@mantine/core'
import AutoCompleteItem from '../select/CustomSelect'


const Anual = () => {


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
        <Select
            label="Escoge un año"
            placeholder="Anual"
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
    </>
  )
}

export default Anual