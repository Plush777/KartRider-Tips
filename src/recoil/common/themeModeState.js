import { atom } from "recoil";

export const themeModeAtom = atom({
    key: 'themeMode',
    default: localStorage.getItem('theme') || 'light'
});