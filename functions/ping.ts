export default () => {
    try {
        return { status: 200, body: { success: true } };
    } catch (error) {
        return { status: 500, body: { success: false } };
    }
};