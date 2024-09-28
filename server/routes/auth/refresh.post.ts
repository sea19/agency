import jwt from 'jsonwebtoken';

import type { ICredentials } from '~/types/Credentials';

export default defineEventHandler(async (event) => {
    const oldRefreshToken = getCookie(event, 'refreshToken');
    if (!oldRefreshToken) {
        throw createError({
            statusCode: 422,
            message: 'Ошибка в валидации токена',
        });
    }

    try {
        const SECRET = 'SECRET';
        const REFRESH_SECRET = 'SECRET_REFRESH';
        const jwtData = jwt.verify(oldRefreshToken, REFRESH_SECRET) as Pick<ICredentials, 'username'>;

        const accessToken = jwt.sign(
            { username: jwtData.username },
            SECRET,
            { expiresIn: '10m', algorithm: 'HS256' },
        );

        const refreshToken = jwt.sign(
            { username: jwtData.username },
            REFRESH_SECRET,
            { expiresIn: '4h', algorithm: 'HS256' },
        );

        setCookie(event, 'accessToken', accessToken, { httpOnly: true });
        setCookie(event, 'refreshToken', refreshToken, { httpOnly: true });

        return {
            accessToken,
            refreshToken,
        };
    }
    catch {
        throw createError({
            statusCode: 422,
            message: 'Ошибка в валидации токена',
        });
    }
});
