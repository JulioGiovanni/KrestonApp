
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AdminLinks } from '../../utils/ArrayLinks'


import React from 'react'
import {CustomButton} from '../buttons/CustomButton'
import CustomLink from './CustomLink'

const Links = () => {
    const router = useRouter()

  return (
    <>            
    {   
        AdminLinks.map((link) => {
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

        })
    }

                        
            


    </>
  )
}

export default Links