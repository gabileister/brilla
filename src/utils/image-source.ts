export const resolveSrc = (src: string): string => {
    return `${import.meta.env.BASE_URL}${src}`
}