const Waiter = async (cb, ts) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            try {
                res(cb());
            } catch (error) {
                rej(error)
            }
        }, ts ?? 1000)
    });
};

export default Waiter;
