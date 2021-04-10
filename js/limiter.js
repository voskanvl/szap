/** @format */

export const limiter = x => (down, up) => {
    if (x < down) return { value: down, less: true, more: false };
    if (x > up) return { value: up, less: false, more: true };
    return { value: x, less: false, more: false };
};
