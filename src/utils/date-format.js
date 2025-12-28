export const validateDate = (date) => {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4} ([01]\d|2[0-3]):[0-5]\d$/;
    return regex.test(date);
};

const pad = (n) => String(n).padStart(2, '0');
const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];

export const isoToFormatDate = (isoDate) => {
    const date = new Date(isoDate);

    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const year = date.getFullYear();

    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    return `${month}/${day}/${year} ${hours}:${minutes}`;
}

export const convertDate = (isoDate, fullDate = true) => {
    const date = new Date(isoDate);

    const month = months[date.getMonth()];
    const day = pad(date.getDate());
    const year = date.getFullYear();

    if (fullDate) {
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());

        return `${month} ${day}, ${year} ${hours}:${minutes}`;
    }

    return `${month} ${day}, ${year}`;
}