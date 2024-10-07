import styled from '@emotion/styled'
import { ChangeEventHandler, FocusEventHandler } from 'react'

import { greyLine, primaryBlue, white } from './colors'

type Props = {
    name: string
    value: boolean
    disabled?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement>
    onBlur?: FocusEventHandler<HTMLInputElement>
}

export const ToggleInput = ({ name, onChange, onBlur, disabled, value }: Props) => (
    <Label value={value}>
        <StyledToggle
            id={name}
            name={name}
            checked={value}
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            data-value={value}
            type="checkbox"
        />
    </Label>
)

const Label = styled.label<{ value: boolean }>`
    display: block;
    width: 40px;
    position: relative;
    cursor: pointer;

    &::before {
        content: '';
        display: block;
        width: 40px;
        height: 20px;
        border-radius: 10px;
        background-color: ${({ value }) => (value ? primaryBlue : greyLine)};
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        transition: all 0.5s ease-in-out;
    }

    &::after {
        content: '';
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${white};
        position: absolute;
        top: 50%;
        right: ${({ value }) => (value ? 3 : 19)}px;
        transform: translateY(-50%);
        transition: all 0.5s ease-in-out;
    }
`

const StyledToggle = styled.input`
    appearance: none;
    width: 0px;
    height: 0px;
    opacity: 0;
`
