import { Card, Tabs } from '@mantine/core'
import Anual from '../../components/AppComponents/anual'
import Proyectos from '../../components/AppComponents/proyectos'



const index = () => {
  return (
    <>
        <Card style={{height:400}} >
            <Tabs grow position="center" variant="outline" tabPadding="xl">
                <Tabs.Tab label="Proyectos">
                    <Proyectos/>
                </Tabs.Tab>
                <Tabs.Tab label="Anual">
                    <Anual/>
                </Tabs.Tab>
            </Tabs>
        </Card>
    </>
  )
}

export default index