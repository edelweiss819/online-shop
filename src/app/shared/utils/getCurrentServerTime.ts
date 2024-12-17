export async function getCurrentServerTime() {
    const currentTime = new Date().getTime();
    return currentTime;
}
