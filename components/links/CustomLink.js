import Link from "next/link"


const CustomLink = ({href,Component,ComponentProps,passHref,active,style}) => {

    return (
        <Link href={href} passHref={passHref ? true : false} style={style && style}>
            {Component && Component({...ComponentProps,active})}
        </Link>
    )
}

export default CustomLink