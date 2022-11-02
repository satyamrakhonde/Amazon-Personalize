export const loadState = () => {
    try {
        const serialState = localStorage.getItem('appState');
        if (serialState == null) {
            return undefined;
        }return JSON.parse(serialState);
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        let loadedState = loadState();
        let serialState = JSON.stringify(state);
        if (loadedState) {
            let newstate = {...loadedState,...state}
            serialState = JSON.stringify(newstate);
        }
       
        localStorage.setItem('appState',serialState);
    } catch (err) {
        console.log(err);
    }
}