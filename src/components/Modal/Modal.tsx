import styled from '@emotion/styled'
import Image from 'next/image'
import { ReactNode } from 'react'

type Props = {
    showModal: boolean
    children: ReactNode
    closeModal: () => void
}
export const Modal = ({ showModal, children, closeModal }: Props) => {
    if (!showModal) return null

    return (
        <Wrap onClick={closeModal}>
            <Container
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <CloseWrap onClick={closeModal}>
                    <Image src="/img/svg/close-icon.svg" width={15} height={15} alt="close" />
                </CloseWrap>
                {children}
            </Container>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(47, 51, 58, 0.8);
    z-index: 99999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &::-webkit-scrollbar {
        width: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: grey;
    }
    overflow-y: auto;
`
const Container = styled.div`
    background: white;
    max-width: 600px;
    max-height: 400px;
    padding: 28px;
    z-index: 99;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CloseWrap = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
    right: 20px;
    top: 20px;
    width: 20px;
    height: 20px;
    z-index: 100;
    border-radius: 3px;
    &:hover {
        background: lightblue;
    }
`
