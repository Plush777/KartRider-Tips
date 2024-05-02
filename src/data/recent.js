export const keyArray = [
    'UCJDEss5wA1ddrCBC40giO8A',
    'UCFBGBsvOMA2gbxmnxgotsmw',
    'UC8Y0MrXoV4eocUBOYzYnCaw',
    'UCkPYxlKG9pF2gIE2HohqaeA'
];

export const getRandomKey = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};