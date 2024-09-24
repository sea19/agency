export default defineEventHandler((event) => {
    const query = getQuery(event);

    return {
        name: 'Наследие',
        imgSrc: 'company-logo.webp',
    };
});
