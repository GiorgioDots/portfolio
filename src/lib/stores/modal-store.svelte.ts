import type { Component } from 'svelte';
import { writable } from 'svelte/store';
import * as uuid from 'uuid';

export type ModalProps = {
	modalId: string;
	active: boolean;
};

export type ModalEntry<P extends Record<string, unknown> & ModalProps> = {
	component: Component<P>;
	props: P & ModalProps;
};

type ModalState = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	activeModals: ModalEntry<any>[]; // we erase P here on purpose
};

export const modalsStore = writable<ModalState>({ activeModals: [] });

export function showModal<P extends Record<string, unknown> & ModalProps>(
	component: Component<P>,
	props: P
) {
	modalsStore.update((s) => {
		const toAdd = { component, props };
		toAdd.props.active = true;
		toAdd.props.modalId = uuid.v7();
		s.activeModals.forEach((k) => (k.props.active = false));
		const updated = {
			...s,
			activeModals: [...s.activeModals, toAdd]
		};
		return updated;
	});
}

export function setAllInactive() {
	modalsStore.update((s) => {
		s.activeModals.forEach((k) => (k.props.active = false));
		return s;
	});
}

export function setActiveModal(modalid: string) {
    console.log(modalid)
	modalsStore.update((s) => {
		const modal = s.activeModals.find((k) => k.props.modalId == modalid);
		if (modal) {
			s.activeModals.forEach((k) => (k.props.active = false));
			modal.props.active = true;
		}
		return s;
	});
}
