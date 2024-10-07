import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { Tablet } from './breakpoints'
import { Color, primaryGrey } from './colors'

export const fonts = {
    h1: {
        mobile: {
            fontSize: '28px',
            lineHeight: '36px',
        },
        desktop: {
            fontSize: '48px',
            lineHeight: '60px',
        },
        fontWeight: '700',
        letterSpacing: 'normal',
    },
    h2: {
        mobile: {
            fontSize: '20px',
            lineHeight: '26px',
        },
        desktop: {
            fontSize: '32px',
            lineHeight: '40px',
        },
        fontWeight: '700',
        letterSpacing: 'normal',
    },
    h3: {
        mobile: {
            fontSize: '24px',
            lineHeight: '32px',
        },
        desktop: {
            fontSize: '28px',
            lineHeight: '36px',
        },
        fontWeight: '500',
        letterSpacing: 'normal',
    },
    h4: {
        mobile: {
            fontSize: '20px',
            lineHeight: '26px',
        },
        desktop: {
            fontSize: '24px',
            lineHeight: '30px',
        },
        fontWeight: '500',
        letterSpacing: 'normal',
    },
    h5: {
        mobile: {
            fontSize: '24px',
            lineHeight: '32px',
        },
        desktop: {
            fontSize: '28px',
            lineHeight: '36px',
        },
        fontWeight: '700',
        letterSpacing: 'normal',
    },
    t1: {
        mobile: {
            fontSize: '18px',
            lineHeight: '24px',
        },
        desktop: {
            fontSize: '20px',
            lineHeight: '26px',
        },
        fontWeight: '700',
        letterSpacing: 'normal',
    },
    t2: {
        mobile: {
            fontSize: '18px',
            lineHeight: '24px',
        },
        desktop: {
            fontSize: '20px',
            lineHeight: '26px',
        },
        fontWeight: '500',
        letterSpacing: 'normal',
    },
    t3: {
        mobile: {
            fontSize: '16px',
            lineHeight: '26px',
        },
        desktop: {
            fontSize: '18px',
            lineHeight: '28px',
        },
        fontWeight: '500',
        letterSpacing: 'normal',
    },
    b1: {
        mobile: {
            fontSize: '16px',
            lineHeight: '26px',
        },
        desktop: {
            fontSize: '18px',
            lineHeight: '28px',
        },
        fontWeight: '400',
        letterSpacing: 'normal',
    },
    t4: {
        mobile: {
            fontSize: '14px',
            lineHeight: '22px',
        },
        desktop: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        fontWeight: '500',
        letterSpacing: '-0.1px',
    },
    b2: {
        mobile: {
            fontSize: '14px',
            lineHeight: '22px',
        },
        desktop: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        fontWeight: '400',
        letterSpacing: 'normal',
    },
    t5: {
        mobile: {
            fontSize: '12px',
            lineHeight: '20px',
        },
        desktop: {
            fontSize: '14px',
            lineHeight: '22px',
        },
        fontWeight: '500',
        letterSpacing: '-0.1px',
    },
    b3: {
        mobile: {
            fontSize: '12px',
            lineHeight: '20px',
        },
        desktop: {
            fontSize: '14px',
            lineHeight: '22px',
        },
        fontWeight: '400',
        letterSpacing: '-0.1px',
    },
    t6: {
        mobile: {
            fontSize: '12px',
            lineHeight: '18px',
        },
        desktop: {
            fontSize: '12px',
            lineHeight: '18px',
        },
        fontWeight: '500',
        letterSpacing: '-0.1px',
    },
    b4: {
        mobile: {
            fontSize: '12px',
            lineHeight: '18px',
        },
        desktop: {
            fontSize: '12px',
            lineHeight: '18px',
        },
        fontWeight: '400',
        letterSpacing: '-0.1px',
    },
}

export type Type = keyof typeof fonts
export type TextTransform = 'uppercase' | 'lowercase' | 'capitalize'
export type TextAlign = 'center' | 'justify' | 'start' | 'end'

export type Props = {
    type: Type
    children: ReactNode
    textTransform?: TextTransform
    textAlign?: TextAlign
    color?: Color
    marginBottom?: number
}

export const Typography = styled('p', {
    shouldForwardProp: (prop) => ['children', 'data-target', 'onClick', 'id'].includes(String(prop)),
})(({ type, textTransform, textAlign, color = primaryGrey, marginBottom }: Props) => ({
    color: color,
    textTransform,
    textAlign,
    fontWeight: fonts[type].fontWeight,
    fontSize: fonts[type].desktop.fontSize,
    lineHeight: fonts[type].desktop.lineHeight,
    letterSpacing: fonts[type].letterSpacing,
    marginBottom: marginBottom || 0 + 'px',

    [`${Tablet}`]: {
        fontSize: fonts[type].mobile.fontSize,
        lineHeight: fonts[type].mobile.lineHeight,
    },
}))
