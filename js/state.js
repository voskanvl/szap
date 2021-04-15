class State {
    constructor() {
        this._index = 0;
        this._images = 0;
        this._listeners = {
            index: [],
            images: [],
        };
    }
    setState({ index, images }) {
        index = Number(index);
        images = Number(images);
        if (index !== this._index && !isNaN(index)) {
            this._index = index;
            this._listeners.index.forEach(cb => cb(index));
        }
        if (images !== this._images && !isNaN(images)) {
            this._images = images;
            this._listeners.images.forEach(cb => cb(images));
        }
    }
    getState() {
        return {
            index: this._index,
            images: this._images,
        };
    }
    on(substate, cb) {
        if (substate !== "index" && substate !== "images")
            throw Error('first argument must to be "index" or "images"');
        this._listeners[substate].push(cb);
    }
    off(substate, cb) {
        if (substate !== "index" && substate !== "images")
            throw Error('first argument must to be "index" or "images"');
        this._listeners[substate] = this._listeners[substate].filter(
            e => e != cb,
        );
    }
}

// export const off = (substate, cb) => {
//     if (substate !== "index" || substate !== "images")
//         throw Error('first argument must to be "index" or "images"');
//     listeners[substate] = listeners[substate].filter(e => e != cb);
// };

export const state = new State();
