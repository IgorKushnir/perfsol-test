import styled from '@emotion/styled'
import Link from 'next/link'

import { Button } from './Button'

type Props = {
    text: string
    href?: string
}

export const ContactUsButton = ({ text, href = '/contact' }: Props) => (
    <StyledLink href={href}>
        <Button size="sm">{text}</Button>
    </StyledLink>
)

export const StyledLink = styled(Link)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
`
