export const isDateNotInPast = (date) => {
    const inputDate = new Date(date);
    const currentDate = new Date();
    const today = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    return inputDate >= today
}