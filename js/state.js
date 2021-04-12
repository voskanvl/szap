const state = {
    index: 0,
    images: 0,
};

const listeners = {
    index: [],
    images: [],
};

export const setState = {
    Index: x => {
        state.index = x;
        listeners.index.forEach(cb => cb(x));
    },
    Images: x => {
        state.images = x;
        listeners.images.forEach(cb => cb(x));
    },
};
export const getState = {
    Index: () => state.index,
    Images: () => state.images,
};
export const on = (substate, cb) => {
    if (substate !== "index" || substate !== "images")
        throw Error('first argument must to be "index" or "images"');
    listeners[substate].push(cb);
};
export const off = (substate, cb) => {
    if (substate !== "index" || substate !== "images")
        throw Error('first argument must to be "index" or "images"');
    listeners[substate] = listeners[substate].filter(e => e != cb);
};
