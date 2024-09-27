export default defineEventHandler(async (event) => {
    const imageName = getRouterParam(event, 'imageName');
    const data = await useStorage('files').getItemRaw(`images:${imageName}`);

    return data;
});
