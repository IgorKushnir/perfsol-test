import cookieCutter from '@boiseitguru/cookie-cutter'

export const getUtmFromCookies = () => {
    const utm = cookieCutter.get('utm')

    const parsedUtm = utm ? JSON.parse(utm) : null
    return {
        source: parsedUtm ? parsedUtm.source : '',
        medium: parsedUtm ? parsedUtm.medium : '',
        campaign: parsedUtm ? parsedUtm.campaign : '',
    }
}
