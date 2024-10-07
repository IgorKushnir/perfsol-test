import styled from '@emotion/styled'
import { About as AboutModel } from '@/models'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import { Markdown } from '@/components/Markdown'
import { SocialLink } from '@/components/SocialNetwork'
import { Testimonial } from '@/components/common/Testimonial'
import { ContactUsCenter, Container, ScreenSection, Tablet, TabletMiddle, Typography } from '@/components/ui'

import { getImageUrl } from '@/utils/images'

export type Props = {
    about: AboutModel
}

export function About({ about }: Props) {
    const { t } = useTranslation()

    if (!about) {
        return null
    }
    const { title, description, testimonials, awards } = about
    return (
        <ScreenSection data-target="section-item" id="about">
            <Container>
                <ContentWrap>
                    <Content>
                        <Typography type="h2" as="h2" marginBottom={24}>
                            {title}
                        </Typography>
                        <Markdown>{description}</Markdown>
                    </Content>
                    {awards?.length > 0 && (
                        <WidgetWrap>
                            {awards.map(({ title, link, icon }) => (
                                <SocialLink href={link} ariaLabel={title} key={title}>
                                    <ImageWrapper>
                                        <Image src={getImageUrl(icon)} width={80} height={80} alt={title} />
                                    </ImageWrapper>
                                </SocialLink>
                            ))}
                        </WidgetWrap>
                    )}
                </ContentWrap>
                <Slide>
                    {testimonials.length > 0 &&
                        testimonials.map((testimonial) => (
                            <Testimonial testimonial={testimonial} key={testimonial.id} />
                        ))}
                </Slide>
                <ContactUs>{t('cta.contactUs')}</ContactUs>
            </Container>
        </ScreenSection>
    )
}

const ContentWrap = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 160px;

    ${TabletMiddle} {
        flex-direction: column;
        gap: 24px;
    }
`

const WidgetWrap = styled.div`
    min-width: 290px;
    height: max-content;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 76px;
    row-gap: 52px;
    flex-wrap: wrap;

    ${TabletMiddle} {
        width: 100%;
        column-gap: 26px;
        row-gap: 32px;
        align-items: center;
        justify-content: flex-start;
    }
`

const Slide = styled.div`
    margin-top: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 2.5rem;
    flex-wrap: wrap;
`

const Content = styled.div`
    margin-bottom: 24px;
`

const ContactUs = styled(ContactUsCenter)`
    margin-top: 60px;
`

const ImageWrapper = styled.div`
    width: 80px;
    height: 85px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    ${Tablet} {
        width: 80px;
        height: 85px;
    }
`
