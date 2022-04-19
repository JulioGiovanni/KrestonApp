import { FC } from "react"
import Link from "next/link"

interface Props {
    href: any
    Component:any,
    ComponentProps:any,
    passHref:boolean,
    active:boolean,
    style?:any,
}

const CustomLink : FC<Props> = ({href,Component,ComponentProps,passHref,active,style}) => {

  
    return (
        <Link href={href} passHref={passHref ? true : false} 
            // style={style && style} 
        >
            {Component && Component({...ComponentProps,active})}
        </Link>
    )
}

export default CustomLink