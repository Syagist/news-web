export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export const convertDateFormat = (date:string) => {
    const parts = date.split("/");

    const year = parts[2];
    const month = parts[0].padStart(2, '0');
    const day = parts[1].padStart(2, '0');

    const newDateString = `${year}${month}${day}`;

    return newDateString;
}
