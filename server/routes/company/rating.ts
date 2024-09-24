export default defineEventHandler((event) => {
    const query = getQuery(event);

    console.log(query);

    return {
        isVerified: true,
        score: 4.9,
        commentCount: 19,
    };
});
