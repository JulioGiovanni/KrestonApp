import { Card } from '@mantine/core'
import React from 'react'

const CustomCardArea = ({header,body,button}) => {
  return (
    <Card>
        {header && (
            <Card.Section>
                {header}
            </Card.Section>
        )} 
        {body && (
            <Card.Section>
                {body}
            </Card.Section>
        )}
        {button && (
            <Card.Section>
                {button}
            </Card.Section>
        )}

    </Card>
  )
}

export {CustomCardArea}