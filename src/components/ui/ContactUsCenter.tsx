import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { ContactUs } from './ContactUs'

type Props = {
    children: ReactNode
    href?: string
}

export const ContactUsCenter = ({ children, href = '/contact' }: Props) => (
    <StyledLink>
        <ContactUs href={href}>{children}</ContactUs>
    </StyledLink>
)

export const StyledLink = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`
