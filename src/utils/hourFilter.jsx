
export const filterHours = (forcast) => {
const desiredHours = [6, 9, 12, 15, 18, 21];
    return forcast.filter(hours => desiredHours.includes(new Date(hours.time).getHours()));
}
