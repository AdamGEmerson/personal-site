import { goto } from '$app/navigation';

export function goTo(event: Event, page: string) {
	event.preventDefault();
	goto(page);
}

export const capitalized = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
