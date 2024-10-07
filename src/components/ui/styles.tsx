import styled from '@emotion/styled'

import { DesktopMiddle, MobileMiddle, Tablet, TabletMiddle } from './breakpoints'
import { Color, lightGray, primaryBlue, primaryGrey, primaryYellow, red, white } from './colors'

export const SectionWrap = styled.div`
    padding: 4.5rem 0 0 0;
    box-sizing: border-box;
    overflow: hidden;
    &:nth-of-type(odd) {
        background-color: ${primaryYellow};
    }
    background: url('/img/svg/case-study-lines.svg') no-repeat bottom right;
    ${TabletMiddle} {
        padding: 2rem 0;
    }
    ${Tablet} {
        background-position: bottom;
    }
`

export const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    box-sizing: border-box;

    ${DesktopMiddle} {
        max-width: 75vw;
    }

    ${Tablet} {
        max-width: 87.5vw;
    }
`

export const HeaderContainer = styled(Container)`
    max-width: 1300px;
    padding-left: 6rem;

    ${DesktopMiddle} {
        max-width: 79vw;
        padding-left: 2vw;
    }
    ${Tablet} {
        max-width: 87.5vw;
        padding-left: 0;
    }
`

export const YellowBorderWrap = styled.div`
    border: 5px solid ${primaryYellow};
    border-radius: 20px;
    padding: 2.5rem;
    margin-bottom: 6rem;
`

export const CommonFlexWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
`

export const Wrap = styled.div`
    min-height: 100dvh;
    position: relative;
    width: 100%;
`

export const HiddenTitle = styled.h1`
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
`

export const Fullscreen = styled.div`
    min-height: 100dvh;
    margin-top: 4rem;
    transition: all 0.25s ease;
`

export const InvalidFeedback = styled.div`
    color: ${red};
    font-size: 10px;
    margin-top: 0.5rem;
    padding-left: 1rem;
    height: 14px;
`

export const FormGroup = styled.div`
    margin-bottom: 1.5rem;
`

export const TextInput = styled.input`
    font-family: inherit;
    display: block;
    background: ${white};
    border: 1px solid ${lightGray};
    box-sizing: border-box;
    border-radius: 5px;
    margin-top: 1rem;
    color: ${primaryGrey};
    font-size: 14px;
    line-height: 20px;
    padding: 0.5rem 1rem;
    appearance: none;
    width: 100%;
    max-width: 90vw;

    &::placeholder {
        opacity: 0.5;
    }

    ${MobileMiddle} {
        line-height: 1rem;
    }

    &:focus {
        border: 1px solid ${primaryBlue};
    }
    label {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        color: ${primaryGrey};
        margin-bottom: 1rem;

        ${MobileMiddle} {
            font-size: 14px;
        }
    }
`

export const RightCTAWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const CTAImageWrap = styled.div<{ imageSize: 's' | 'm' }>`
    position: relative;
    width: ${({ imageSize }) => (imageSize === 's' ? '60px' : '80px')};
    height: ${({ imageSize }) => (imageSize === 's' ? '60px' : '80px')};
    border-radius: 50%;
    overflow: hidden;

    ${Tablet} {
        width: 40px;
        height: 40px;
    }
`

export const ScreenSection = styled.section<{ backgroundColor?: Color }>`
    position: relative;
    padding: 4rem 0;
    background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : white)};
    overflow: hidden;

    ${Tablet} {
        padding: 2rem 0;
    }
`
