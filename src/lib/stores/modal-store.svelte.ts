import type { Component } from 'svelte';
import { writable } from 'svelte/store';

export type ModalEntry<P extends Record<string, unknown>> = {
	component: Component<P>;
	props: P;
    isTop?: false,
};

type ModalState = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	activeModals: ModalEntry<any>[]; // we erase P here on purpose
};

export const modalsStore = writable<ModalState>({ activeModals: [] });

export function showModal<P extends Record<string, unknown>>(component: Component<P>, props: P) {
	modalsStore.update((s) => ({
		...s,
		activeModals: [...s.activeModals, { component, props }]
	}));
}
