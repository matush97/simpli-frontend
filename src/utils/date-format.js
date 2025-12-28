export const validateDate = (date) => {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4} ([01]\d|2[0-3]):[0-5]\d$/;
    return regex.test(date);
};

export const isoToFormatDate = (isoString) => {
    const date = new Date(isoString);

    const pad = (n) => String(n).padStart(2, '0');

    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const year = date.getFullYear();

    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    return `${month}/${day}/${year} ${hours}:${minutes}`;
}