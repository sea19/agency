export default defineEventHandler((event) => {
    deleteCookie(event, 'accessToken');
    deleteCookie(event, 'refreshToken');

    setResponseStatus(event, 200, 'OK');

    return 'OK';
});
