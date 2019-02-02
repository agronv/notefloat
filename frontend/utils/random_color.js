export const randomBackgroundColor = () => {
    const hex = Math.floor(Math.random() * 10777216);
    return ("000000" + hex.toString(16)).substr(-6);
};

export const randomColor = () => {
    const hex = Math.floor(Math.random() * 16777216);
    return ("000000" + hex.toString(16)).substr(-6);
};
 