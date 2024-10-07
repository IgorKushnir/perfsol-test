import { PropsWithChildren, ReactElement, ReactNode } from 'react'

type Props = {
    condition: boolean
    trueWrapper: (children: ReactNode) => ReactElement
    falseWrapper: (children: ReactNode) => ReactElement
}

export const ConditionalWrapper = ({ condition, trueWrapper, falseWrapper, children }: PropsWithChildren<Props>) =>
    condition ? trueWrapper(children) : falseWrapper(children)
