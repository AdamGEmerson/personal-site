import { writable } from 'svelte/store';
import {
	IconAtom,
	IconBrandAndroid,
	IconBrandAws,
	IconBrandD3,
	IconBrandFirebase,
	IconBrandNextjs,
	IconBrandPrisma,
	IconBrandPython,
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

// Sightstone
import sightstoneTitle from '/src/images/sightstone/sightstone-title.png';
import sightstoneExampleOne from '/src/images/sightstone/sightstone-example-1.png';
import sightstoneExampleTwo from '/src/images/sightstone/sightstone-example-2.png';
import sightstoneReviewOne from '/src/images/sightstone/sightstone-review-1.png';
import sightstoneReviewTwo from '/src/images/sightstone/sightstone-review-2.png';

export const projects = writable({
	crucible: {
		slug: 'crucible',
		title: 'Crucible',
		subtitle: 'Desktop Application',
		isResearch: true,
		featured: true,
		paperTitle: 'Crucible: Graphical Test Cases for Alloy Models',
		paperLink: 'https://ieeexplore.ieee.org/document/10299937',
		conference: 'ISSRE 2023',
		authors: ['Adam G. Emerson', 'Allison Sullivan'],
		projectLinks: [{ name: 'GitHub', url: 'https://github.com/Crucible-Alloy/Crucible' }],
		description:
			'Alloy is a declarative modeling language that is well suited for verifying system designs. Alloy models are automatically analyzed using the Analyzer, a toolset that helps the user understand their system by displaying the consequences of their properties, helping identify any missing or incorrect properties, and exploring the impact of modifications to those properties. To achieve this, the Analyzer invokes off-the-shelf SAT solvers to search for scenarios, which are assignments to the sets and relations of the model such that all executed formulas hold. To help write more accurate software models, Alloy has a unit testing framework, AUnit, which allows users to outline specific scenarios and check if those scenarios are correctly generated or prevented by their model. Unfortunately, AUnit currently only supports textual specifications of scenarios. This paper introduces Crucible, which allows users to graphically create AUnit card-test cases. In addition, Crucible provides automated guidance to users to ensure they are creating well structured, valuable card-test cases. As a result, Crucible eases the burden of adopting AUnit and brings AUnit card-test case creation more in line with how Alloy scenarios are commonly interacted with, which is graphically.',
		madeWith: [
			{ name: 'Typescript', icon: IconBrandTypescript },
			{ name: 'React', icon: IconBrandReact },
			{ name: 'Electron', icon: IconAtom },
			{ name: 'SQLite', icon: IconDatabase },
			{ name: 'Prisma', icon: IconBrandPrisma }
		],
		screenshots: [
			{ alt: 'Crucible, No Code Unit Testing for Alloy', src: crucibleTitle },
			{ alt: 'An AUnit card-test case in Crucible', src: crucibleTest },
			{ alt: 'Creating a new card-test in Crucible', src: crucibleNewTest },
			{ alt: 'Asserting predicates in Crucible', src: cruciblePredicates }
		],
		updated: '2023-12-07'
	},
	bridgeit: {
		slug: 'bridgeit',
		title: 'BridgeIt',
		subtitle: 'Web Application',
		isResearch: true,
		featured: true,
		paperTitle: 'BridgeIt: Crossing the Knowledge Gap Between Maker Communities of Practice',
		paperLink: 'https://hybridatelier.uta.edu/uploads/project/paper/83/Emerson-BridgeIt-ISAM23.pdf',
		conference: 'ISAM 2023',
		authors: ['Adam G. Emerson', 'Cesar Torres'],
		projectLinks: [{ name: 'Website', url: 'https://hybridatelier.uta.edu/projects/83-bridgeit' }],
		description:
			'In recent years, online tutorials on video sharing platforms like TikTok and YouTube have become a prominent resource for DIY and makerspace learning, especially in offering valuable insight on the tools, materials, and techniques used. However, existing platforms often lack the comprehensive tools needed to navigate and connect knowledge across different DIY domains, creating a barrier for newcomers who must start from scratch when learning new skills. This result is hours spent watching video tutorials, mostly consisting of redundant information in hopes of finding answers to specific questions. The problem is compounded when operating in interdisciplinary practices because maker communities can be isolated in discrete “filter-bubbles” by search-engine algorithms which partition and segregate information into niche sub-communities whose motivations differ. To overcome this knowledge isolation challenge, we introduce BridgeIt, a knowledge discovery tool. BridgeIt allows both new and experienced makers to quickly understand a Community of Practice (CoP) by visualizing shared concepts between two communities, encouraging users to compare and contrast domains. Leveraging YouTube, BridgeIt collects tutorial transcripts from various communities, extracts key concepts, and presents them in an easily digestible format, supporting the development of a common language between otherwise disparate maker groups. Through effective aggregation and dissemination of community-based knowledge, BridgeIt empowers makers to collaborate and explore new interdisciplinary mediums.',
		madeWith: [
			{ name: 'Typescript', icon: IconBrandTypescript },
			{ name: 'React', icon: IconBrandReact },
			{ name: 'Supabase', icon: IconBrandSupabase },
			{ name: 'Youtube', icon: IconBrandYoutube }
		],
		screenshots: [
			{ alt: 'BridgeIt', src: bridgeItTitle },
			{ alt: 'BridgeIt Poster', src: bridgeItPoster },
			{ alt: 'BridgeIt Figure', src: bridgeItFigure }
		],
		updated: '2023-12-07'
	},
	auragraph: {
		slug: 'auragraph',
		title: 'Auragraph',
		subtitle: 'Web Application',
		isResearch: false,
		authors: [],
		featured: true,
		projectLinks: [
			{ name: 'Website', url: 'https://auragraph.io' },
			{ name: 'GitHub', url: 'https://github.com/adamgemerson/auragraph' }
		],
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
			{ alt: 'Title Illustration', src: auragraphTitle },
			{ alt: 'Your Auragraph Page', src: auragraphGraph },
			{ alt: 'Auragraph Explore Page', src: auragraphExplore },
			{ alt: 'Auragraph Home Page', src: auragraphHome }
		],
		updated: '2023-12-07'
	},
	universe: {
		slug: 'universe',
		title: 'UniVerse',
		subtitle: 'Android Application',
		authors: [],
		isResearch: false,
		featured: true,
		projectLinks: [{ name: 'GitHub', url: 'https://github.com/UniVerse-App/UniVerse' }],
		description:
			'UniVerse is a mobile application for Android phones designed to assist students and organizers alike in creating, managing, finding, and attending on-campus events. The app’s core feature is a personalized “feed” that will display upcoming events and activities relevant to each user. From the feed, users will be able to view details on each event and RSVP to events they wish to attend. UniVerse is written entirely in Java, and its dependencies include FirebaseAuth, FirebaseStorage, FirebaseDatabase, and Glide.',
		madeWith: [
			{ name: 'Android', icon: IconBrandAndroid },
			{ name: 'Firebase', icon: IconBrandFirebase },
			{ name: 'Java', icon: IconCoffee }
		],
		screenshots: [
			{ alt: 'UniVerse Splash Screen', src: universeSplash },
			{ alt: 'UniVerse Mockups', src: universeMocks }
		],
		updated: '2023-12-07'
	},
	sightstone: {
		slug: 'sightstone',
		title: 'Sightstone',
		subtitle: 'Amazon Alexa Skill',
		authors: [],
		isResearch: false,
		featured: true,
		projectLinks: [
			{ name: 'Amazon', url: 'https://www.amazon.com/Adam-Emerson-Sightstone/dp/B07B2C1P5M' }
		],
		description:
			'Sightstone was an unofficial Alexa app for the popular online video game, League of Legends (LoL).  Built in 2018, it was one of my first "real" projects, and truthfully I was a little too motivated by a promotional hoodie Amazon was giving out to published Alexa devs at the time (which I still have). The app was generally well received by the community, but I quickly found out that I had neither the time or interest to continually update Sightstone every time an update for LoL came out. After one update, adding a few requested features and the newest champion (Kai\'Sa I think?), the project effectively became deprecated.\n' +
			'\n' +
			'Sightstone was designed to allow users to quickly get information on the current LoL meta. Users could pose questions like "Alexa, what items should I build on Teemo?" or "Alexa, who is the best counter-pick into Ahri?" The project was almost entirely built with Python, which at the time was all I knew.  I remember hearing about a library, [Flask-Ask](https://github.com/johnwheeler/flask-ask), on a podcast, which gave me the idea for the project.  Flask-Ask allowed you to define endpoints for your Alexa application with a familiar Flask syntax.  I got all of my data by scraping OP.gg nightly with a BS4 script that I had managed to host on Heroku.\n' +
			'\n' +
			'Unfortunately, being that I was relatively new to programming, I had no real grasp on version control at the time.  As a result, I believe the source code and backend infrastructure has been lost to time. The skill is still up on the Amazon app store, but the scraper was nuked during the recent Heroku debacle.\n' +
			'\n' +
			"As something of a memorial to the Sightstone, I recently decided to go back and give some of the reviews from the Amazon page the League treatment.  Pictured here, I've used the some of the brand guidelines from Riot Games to showcase the reviews I received and use cases that Sightstone offered the community when it was active.  Shout out to [Andrea Urena](https://twitter.com/andresurena), [Reet Talreja](https://unsplash.com/@_reettalreja_), and [Jonathan Borba](https://unsplash.com/@jonathanborba)for their photographs used in my compositions. \n" +
			'\n' +
			'Despite its eventual obsolescence, Sightstone remains a project close to my heart. It was the first time shipping something that I had come up with on my own, and thinking back, I see it as a representation of where I started and the progress I have made since.',
		madeWith: [
			{ name: 'Python', icon: IconBrandPython },
			{ name: 'Alexa', icon: IconBrandAws }
		],
		screenshots: [
			{
				alt: 'An image of a hero lockup for Sightstone, depicting the logo which is an homage to a since retired in-game item of the same name.',
				src: sightstoneTitle
			},
			{
				alt: 'An image with a review by a user named victoria which says "Love This. I insist on picking randomly all the time and this really has sped up the run process from my normal routine of tabbing out to google it"',
				src: sightstoneReviewOne
			},
			{
				alt: 'An image of an Amazon Alexa and the text "Alexa, ask Sightstone what runes I should take on Miss Fortune"',
				src: sightstoneExampleOne
			},
			{
				alt: 'An image with a review by a user named Greg which says "Very useful when I get a champ in ARAM that\'s not in my regular pool and want to check that I\'m picking the most efficient runes."',
				src: sightstoneReviewTwo
			},
			{
				alt: 'An image of an Amazon Alexa and the text "Alexa, ask Sightstone who counters Karma?"',
				src: sightstoneExampleTwo
			}
		],
		updated: '2024-01-09'
	}
});
