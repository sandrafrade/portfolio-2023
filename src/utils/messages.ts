const getMessages = (locale?: string): IntlMessages => {
    const messages: IntlMessages = require(`@/../../messages/${locale ?? 'en'}.json`)

    return messages
}

export default getMessages