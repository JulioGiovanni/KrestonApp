import { Accordion, useMantineTheme } from '@mantine/core'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { CustomButton } from '../buttons/CustomButton'
import CustomLink from '../links/CustomLink'


interface Props {
    ComponentProps, 
    text, 
    accordionLinks, 
    active, 
    href, 
    passHref,
    icon,
}

const CustomAccordion: FC<Props> = (props) => {
    const router = useRouter();
    const theme = useMantineTheme();
    const { ComponentProps, text, accordionLinks, active, href, passHref,icon, ...rest } = props;
    return (
        <Accordion 
            initialItem={router.pathname.includes('/consultas') ? 0 : -1}
            icon={icon}  
            styles={{
                label:{color: theme.colors.blue[6]},
                control:{
                    padding: '0.5rem',
                    display: 'flex',
                    borderRadius: '50px',
                    ':hover':{
                        backgroundColor: theme.colors.blue[0],
                    }
                },
                icon:{color: theme.colors.blue[5], marginLeft: '0.5rem'},
                item:{border: 'none'},
              
                
            
            }}
            disableIconRotation
        >
            <Accordion.Item label={text} color={theme.primaryColor}>
                {props.accordionLinks.map((link) => {
                    return(
                        <CustomLink
                            key={link.link}
                            href={link.link}
                            Component={CustomButton}
                            ComponentProps={link.ComponentProps}
                            active={router.pathname === link.link ? true : false}
                            passHref
                    />  
                    )
                })}
            </Accordion.Item>
        </Accordion>
    )
}

export default CustomAccordion