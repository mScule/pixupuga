import { writable } from "svelte/store";

export const playMusic = writable<boolean>(false);
export const playSounds = writable<boolean>(false);
