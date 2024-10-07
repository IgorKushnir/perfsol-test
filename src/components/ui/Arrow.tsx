import styled from '@emotion/styled'

import { Color, primaryBlue } from './colors'

export const Arrow = styled.i<{ hide?: boolean; color?: Color; disabled?: boolean; rotate?: string; margin?: string }>`
    position: relative;
    border: solid ${({ color }) => color || 'black'};
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
    transition: all 0.2s;
    transition: opacity 0.3s;
    opacity: ${({ hide, disabled, color }) => (disabled ? (color === primaryBlue ? 0.15 : 0.5) : hide ? 0 : 1)};
    transform: rotate(${({ rotate }) => rotate});
    margin: ${({ margin }) => margin || '0px'};
`
