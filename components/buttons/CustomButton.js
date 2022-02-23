import { Button, UnstyledButton, useMantineTheme } from '@mantine/core'
import React from 'react'

const CustomButton = ({text,icon,variant,buttonStyle,fullWidth,sx,active}) => {
    const theme = useMantineTheme()
  return (
    <Button 
        style={buttonStyle && buttonStyle } 
        variant={variant && variant}
        fullWidth={fullWidth ? true : false}
        leftIcon={icon && icon}
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