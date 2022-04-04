import { Button, ButtonVariant, UnstyledButton, useMantineTheme } from '@mantine/core'
import React from 'react'

interface Props {
    text:string,
    icon:any,
    variant?:ButtonVariant,
    buttonStyle?:any,
    fullWidth?:boolean,
    sx?:any,
    active?:boolean,
}


const CustomButton = (props:Props) => {
    const {text,icon,variant,buttonStyle,fullWidth,sx,active} = props;

    const theme = useMantineTheme()
  return (
    <Button 
        style={buttonStyle && buttonStyle } 
        variant={variant }
        fullWidth={fullWidth ? true : false}
        leftIcon={icon}
        sx={{...sx,
            backgroundColor: active ? theme.colors.indigo[5] : '',
            color: active ? 'white' : '',
            ':hover': {
                backgroundColor: active ? theme.colors.indigo[4] : '',
                color: active ? 'white' : '',
            }
        }}
    >
        {text}
    </Button>
  )
}

const CustomUnstyledButton = ({text,icon,variant}) => {
    return (
        <UnstyledButton style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',

        }}>
            {text}
        </UnstyledButton>
    )
}


export  {CustomButton,CustomUnstyledButton}