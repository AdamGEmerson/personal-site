import { writable } from 'svelte/store';
import {
	IconAtom,
	IconBrandAndroid,
	IconBrandD3,
	IconBrandFirebase,
	IconBrandNextjs,
	IconBrandPrisma,
	IconBrandReact,
	IconBrandSpotify,
	IconBrandSupabase,
	IconBrandTypescript,
	IconBrandYoutube,
	IconCoffee,
	IconDatabase
} from '@tabler/icons-svelte';

import auragraphTitle from '/src/images/auragraph/auragraphPreview.png';
import auragraphGraph from '/src/images/auragraph/yourAuragraph.png';
import auragraphHome from '/src/images/auragraph/auragraphHome.png';
import auragraphExplore from '/src/images/auragraph/explorePage.png';
import universeSplash from '/src/images/universe/universeSplash.png';
import universeMocks from '/src/images/universe/universeMocks.png';

// Crucible
import crucibleTitle from '/src/images/crucible/cruciblePreview.png';
import crucibleTest from '/src/images/crucible/crucibleTest.png';
import crucibleNewTest from '/src/images/crucible/crucibleNewTest.png';
import cruciblePredicates from '/src/images/crucible/cruciblePredicates.png';

// BridgeIt
import bridgeItTitle from '/src/images/bridgeIt/bridgeItPreview.png';
import bridgeItFigure from '/src/images/bridgeIt/bridgeItFigure.png';
import bridgeItPoster from '/src/images/bridgeIt/bridgeItPoster.png';
import type { SvelteComponentTyped } from 'svelte';

export interface Project {
	slug: string;
	title: string;
	isResearch: boolean;
	featured: boolean;
	paperTitle?: string;
	paperLink?: string;
	conference?: string;
	authors?: string[];
	href?: string | null;
	githubHref: string | null;
	description: string;
	madeWith: {
		name: string;
		icon: any;
	}[];
	screenshots: {
		alt: string;
		url: string;
	}[];
	updated: string;
}

export const projects = writable({
	crucible: {
		slug: 'crucible',
		title: 'Crucible',
		isResearch: true,
		featured: true,
		paperTitle: 'Crucible: Graphical Test Cases for Alloy Models',
		paperLink: 'https://ieeexplore.ieee.org/document/10299937',
		conference: 'ISSRE 2023',
		authors: ['Adam G. Emerson', 'Allison Sullivan'],
		href: null,
		githubHref: 'https://github.com/Crucible-Alloy/Crucible',
		description:
			'Alloy is a declarative modeling language that is well suited for verifying system designs. Alloy models are automatically analyzed using the Analyzer, a toolset that helps the user understand their system by displaying the consequences of their properties, helping identify any missing or incorrect properties, and exploring the impact of modifications to those properties. To achieve this, the Analyzer invokes off-the-shelf SAT solvers to search for scenarios, which are assignments to the sets and relations of the model such that all executed formulas hold. To help write more accurate software models, Alloy has a unit testing framework, AUnit, which allows users to outline specific scenarios and check if those scenarios are correctly generated or prevented by their model. Unfortunately, AUnit currently only supports textual specifications of scenarios. This paper introduces Crucible, which allows users to graphically create AUnit test cases. In addition, Crucible provides automated guidance to users to ensure they are creating well structured, valuable test cases. As a result, Crucible eases the burden of adopting AUnit and brings AUnit test case creation more in line with how Alloy scenarios are commonly interacted with, which is graphically.',
		madeWith: [
			{ name: 'Typescript', icon: IconBrandTypescript },
			{ name: 'React', icon: IconBrandReact },
			{ name: 'Electron', icon: IconAtom },
			{ name: 'SQLite', icon: IconDatabase },
			{ name: 'Prisma', icon: IconBrandPrisma }
		],
		screenshots: [
			{ alt: 'Crucible, No Code Unit Testing for Alloy', url: crucibleTitle },
			{ alt: 'An AUnit test case in Crucible', url: crucibleTest },
			{ alt: 'Creating a new test in Crucible', url: crucibleNewTest },
			{ alt: 'Asserting predicates in Crucible', url: cruciblePredicates }
		],
		updated: '2023-12-07'
	},
	bridgeit: {
		slug: 'bridgeit',
		title: 'BridgeIt',
		isResearch: true,
		featured: true,
		paperTitle: 'BridgeIt: Crossing the Knowledge Gap Between Maker Communities of Practice',
		paperLink: 'https://hybridatelier.uta.edu/uploads/project/paper/83/Emerson-BridgeIt-ISAM23.pdf',
		conference: 'ISAM 2023',
		authors: ['Adam G. Emerson', 'Cesar Torres'],
		href: 'https://hybridatelier.uta.edu/projects/83-bridgeit',
		githubHref: null,
		description:
			'In recent years, online tutorials on video sharing platforms like TikTok and YouTube have become a prominent resource for DIY and makerspace learning, especially in offering valuable insight on the tools, materials, and techniques used. However, existing platforms often lack the comprehensive tools needed to navigate and connect knowledge across different DIY domains, creating a barrier for newcomers who must start from scratch when learning new skills. This result is hours spent watching video tutorials, mostly consisting of redundant information in hopes of finding answers to specific questions. The problem is compounded when operating in interdisciplinary practices because maker communities can be isolated in discrete “filter-bubbles” by search-engine algorithms which partition and segregate information into niche sub-communities whose motivations differ. To overcome this knowledge isolation challenge, we introduce BridgeIt, a knowledge discovery tool. BridgeIt allows both new and experienced makers to quickly understand a Community of Practice (CoP) by visualizing shared concepts between two communities, encouraging users to compare and contrast domains. Leveraging YouTube, BridgeIt collects tutorial transcripts from various communities, extracts key concepts, and presents them in an easily digestible format, supporting the development of a common language between otherwise disparate maker groups. Through effective aggregation and dissemination of community-based knowledge, BridgeIt empowers makers to collaborate and explore new interdisciplinary mediums.',
		madeWith: [
			{ name: 'Typescript', icon: IconBrandTypescript },
			{ name: 'React', icon: IconBrandReact },
			{ name: 'Supabase', icon: IconBrandSupabase },
			{ name: 'Youtube', icon: IconBrandYoutube }
		],
		screenshots: [
			{ alt: 'BridgeIt', url: bridgeItTitle },
			{ alt: 'BridgeIt Poster', url: bridgeItPoster },
			{ alt: 'BridgeIt Figure', url: bridgeItFigure }
		],
		updated: '2023-12-07'
	},
	auragraph: {
		slug: 'auragraph',
		title: 'Auragraph',
		isResearch: false,
		authors: [],
		featured: true,
		href: 'https://auragraph.io',
		githubHref: 'https://github.com/adamgemerson/auragraph',
		description:
			'Auragraph is a web application for Spotify users designed by a music enthusiast, for music enthusiasts. We aim to help users visualize the relationships between their favorite artists by generating colorful, interactive euler diagrams that we call, you guessed it, auragraphs.\n' +
			'\n' +
			"Spotify recognizes over 5000 unique genres of music. That's a lot to wade through!\n" +
			'\n' +
			'We hope that auragraph will enable people to better understand musical taxonomy while enabling the exploration and discovery of new sounds.',
		madeWith: [
			{ name: 'Typescript', icon: IconBrandTypescript },
			{ name: 'Next.js', icon: IconBrandNextjs },
			{ name: 'Supabase', icon: IconBrandSupabase },
			{ name: 'D3', icon: IconBrandD3 },
			{ name: 'Spotify API', icon: IconBrandSpotify }
		],
		screenshots: [
			{ alt: 'Title Illustration', url: auragraphTitle },
			{ alt: 'Your Auragraph Page', url: auragraphGraph },
			{ alt: 'Auragraph Explore Page', url: auragraphExplore },
			{ alt: 'Auragraph Home Page', url: auragraphHome }
		],
		updated: '2023-12-07'
	},
	universe: {
		slug: 'universe',
		title: 'UniVerse',
		authors: [],
		isResearch: false,
		featured: true,
		href: null,
		githubHref: 'https://github.com/UniVerse-App/UniVerse',
		description:
			'UniVerse is a mobile application for Android phones designed to assist students and organizers alike in creating, managing, finding, and attending on-campus events. The app’s core feature is a personalized “feed” that will display upcoming events and activities relevant to each user. From the feed, users will be able to view details on each event and RSVP to events they wish to attend. UniVerse is written entirely in Java, and its dependencies include FirebaseAuth, FirebaseStorage, FirebaseDatabase, and Glide.',
		madeWith: [
			{ name: 'Android', icon: IconBrandAndroid },
			{ name: 'Firebase', icon: IconBrandFirebase },
			{ name: 'Java', icon: IconCoffee }
		],
		screenshots: [
			{ alt: 'UniVerse Splash Screen', url: universeSplash },
			{ alt: 'UniVerse Mockups', url: universeMocks }
		],
		updated: '2023-12-07'
	}
});
