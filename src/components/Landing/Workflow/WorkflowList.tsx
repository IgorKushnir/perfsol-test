import styled from '@emotion/styled'
import { Workflow } from '@/models'
import Image from 'next/image'

import { WorkflowPhaseItem } from '@/components/Landing/Workflow/WorkflowPhaseItem'
import { DesktopMiddle, DesktopSmall, MobileLarge, Tablet, TabletMiddle, white } from '@/components/ui'

type Props = { flowList: Workflow[] }

export const WorkflowList = ({ flowList }: Props) => (
    <List>
        {flowList.map(({ image, list, title, id }) => (
            <Item key={id}>
                <Wrap>
                    <LeftSectionWrap>
                        <NumberWrapMobile>{`0${id}`}</NumberWrapMobile>
                        <ImageWrap>
                            <Image src={image.url} width={80} height={80} alt={title} />
                        </ImageWrap>
                    </LeftSectionWrap>
                    <WorkflowPhaseItem key={id} phasesList={list} title={title} />
                    <NumberWrap>{`0${id}`}</NumberWrap>
                </Wrap>
            </Item>
        ))}
    </List>
)

const List = styled.ul`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    ${DesktopMiddle} {
        row-gap: 20px;
        align-items: center;
        flex-wrap: wrap;
    }

    ${DesktopSmall} {
        flex-direction: column;
    }

    ${Tablet} {
        padding-top: 50px;
        row-gap: 15px;
    }
`

const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;

    ${TabletMiddle} {
        height: 400px;
        margin-bottom: 0;
    }

    ${DesktopSmall} {
        box-sizing: border-box;
        height: auto;
        padding: 0 0 13px 40px;
        width: 100%;
        border-bottom: 1px solid white;
        align-items: center;
        justify-content: flex-start;
        &:last-child {
            border-bottom: none;
        }
    }

    ${Tablet} {
        width: 80%;
    }

    @media (max-width: 640px) {
        width: 100%;
        padding: 0 0 20px 0px;
    }
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-width: 130px;
    max-height: 565px;
    height: 100%;

    ${DesktopSmall} {
        flex-direction: row;
        align-items: center;
    }

    ${Tablet} {
        min-width: 0px;
    }
`

const NumberWrap = styled.div`
    font-weight: 900;
    font-size: 60px;
    color: ${white};
    margin-top: auto;
    position: relative;

    ${TabletMiddle} {
        display: none;
    }

    ${Tablet} {
        font-size: 46px;
    }

    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 1px;
        height: 37px;
        background: #fff;
        left: -20px;
        bottom: -60px;
        z-index: 9;

        ${TabletMiddle} {
            height: 90%;
            align-items: center;
        }
    }
    ${DesktopSmall} {
        display: none;
    }
`

const NumberWrapMobile = styled(NumberWrap)`
    width: 62px;
    display: none;
    ${DesktopSmall} {
        display: block;
        margin-top: 0;
        &::before {
            content: none;
        }
    }
`

const ImageWrap = styled.div`
    width: 80px;
    height: 80px;
    position: relative;
    left: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LeftSectionWrap = styled.div`
    min-width: 142px;
    display: flex;

    ${MobileLarge} {
        flex-direction: column;
        max-width: 80px;
    }
`
