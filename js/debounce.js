export const debounce = (fn, time) => {
    let enabled = true;

    return (...args) => {
        if (!enabled) return;
        fn.apply(null, args);
        enabled = false;
        setTimeout(() => {
            enabled = true;
        }, time);
    };
};
