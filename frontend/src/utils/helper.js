export const getFormattedDate = (date) => {
    const originalDate = new Date(date);
    return `${originalDate.getDate()}-${originalDate.getMonth() + 1}-${originalDate.getFullYear()}`;
}