export function GenerateId(prefix = "PRM") {
    const timestamp = Date.now().toString(36);
    const randome = Math.random().toString(36).substring(2,6);
    return `${prefix}-${timestamp}-${randome}`.toUpperCase();
}