import data from './data.json';

export const requestData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    });
};