type CardSuit = 'spades' | 'hearts' | 'clubs' | 'diamonds';
type BentoVariant = 'default' | 'icon' | 'featured';
type ProjectLink = { name: string; url: string };
type MenuItem = { name: string; path: string };

type SortKey = 'title' | 'subtitle' | 'updated';
type SortOrder = 'none' | 'desc' | 'asc';

interface Card {
	name: string;
	description: string;
	author: string;
	year: number;
	value: string;
	suit: CardSuit;
	icon: string;
	gradientFrom: string;
	gradientTo: string;
}
interface CardStore {
	faceCards: Card[];
}

interface Project {
	slug: string;
	title: string;
	subtitle: string;
	isResearch: boolean;
	featured: boolean;
	projectLinks?: ProjectLink[];
	paperTitle?: string;
	paperLink?: string;
	conference?: string;
	authors?: string[];
	description: string;
	madeWith: {
		name: string;
		icon: any;
	}[];
	screenshots: HTMLImageElement[];
	updated: string;
}

interface BentoItemProps {
	id: number;
	name: string;
	description?: string;
	variant?: BentoVariant;
	featured: boolean;
}
