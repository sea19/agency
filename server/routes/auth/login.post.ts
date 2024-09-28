import jwt from 'jsonwebtoken';

import type { ICredentials } from '~/types/Credentials';

export default defineEventHandler(async (event) => {
    const { username, password } = await readBody<ICredentials>(event);

    if (username !== 'admin' || password !== 'secret') {
        throw createError({
            statusCode: 422,
            message: 'Неправильный логин или пароль',
        });
    }

    const SECRET = 'SECRET';
    const REFRESH_SECRET = 'SECRET_REFRESH';
    const accessToken = jwt.sign({ username }, SECRET, { expiresIn: '10m', algorithm: 'HS256' });
    const refreshToken = jwt.sign({ username }, REFRESH_SECRET, { expiresIn: '4h', algorithm: 'HS256' });

    setCookie(event, 'accessToken', accessToken, { httpOnly: true });
    setCookie(event, 'refreshToken', refreshToken, { httpOnly: true });

    return {
        accessToken,
        refreshToken,
    };
});
