import { Text } from "@mantine/core"
import Image from "next/image"
import logo  from "../../../../public/images/KRESTON-CSM-LOGO.jpg"


const Brand = () => {
  return (
    <div style={{marginLeft:'20px',marginTop:'15px'}}>
        <Image
            // src="/images/logo.png"
            src={logo}
            alt="Logo"
            width={150}
            height={100}
        />
        {/* <Text>Kreston CSM</Text> */}
    </div>
  )
}

export default Brand