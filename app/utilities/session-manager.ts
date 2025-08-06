const sessionUpdateEvent = new Event('session-updated');

export const updateSessionData = (key: string, newData: any) => {
    sessionStorage.setItem(key, newData);
    window.dispatchEvent(sessionUpdateEvent);
};

export const removeSessionData = (key: string) => {
    sessionStorage.removeItem(key);
    window.dispatchEvent(sessionUpdateEvent);
};