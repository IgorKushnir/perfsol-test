import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

type Props = {
    href: string
    ariaLabel: string
    size?: number
}
export const SocialLink = ({ children, href, ariaLabel, size }: PropsWithChildren<Props>) => (
    <Link href={href} size={size} aria-label={`Perfsol ${ariaLabel}`} rel="nofollow noreferrer" target="_blank">
        {children}
    </Link>
)

const Link = styled.a<{ size?: number }>`
    position: relative;
    display: block;
    cursor: pointer;
    ${({ size }) =>
        size &&
        `
    width: ${size}px;
    height: ${size}px;
    `}

    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.2);
    }
`
