import {writable} from "svelte/store";
import {
    IconAtom,
    IconBrandAndroid,
    IconBrandD3, IconBrandFirebase, IconBrandMantine,
    IconBrandNextjs, IconBrandPrisma, IconBrandReact,
    IconBrandSpotify,
    IconBrandSupabase,
    IconBrandTypescript, IconCoffee, IconDatabase
} from "@tabler/icons-svelte";

export const projects = writable({
    auragraph: {
        slug: 'auragraph',
        title: 'Auragraph',
        href: 'https://auragraph.io',
        githubHref: 'https://github.com/adamgemerson/auragraph',
        description: 'Auragraph is a web application for Spotify users designed by a music enthusiast, for music enthusiasts. Auragraph aims to help users visualize the relationships between their favorite artists by generating colorful, interactive euler diagrams that we call, you guessed it, auragraphs. Spotify recognizes over 5000 unique genres of music. That\'s a lot to wade through! We hope that auragraph will enable people to better understand musical taxonomy while enabling the exploration and discovery of new sounds.',
        madeWith: [
            {name: 'Typescript', icon: IconBrandTypescript},
            {name: 'Next.js', icon: IconBrandNextjs},
            {name: 'Supabase', icon: IconBrandSupabase},
            {name: 'D3', icon: IconBrandD3},
            {name: 'Spotify API', icon: IconBrandSpotify}
        ],
        screenshots: [
            {alt: 'Title Illustration', url: "/images/auragraph/auragraphPreview.png"},
            {alt: 'Your Auragraph Page', url: "/images/auragraph/yourAuragraph.png"},
            {alt: 'Auragraph Explore Page', url: "/images/auragraph/explorePage.png"},
            {alt: 'Auragraph Home Page', url: "/images/auragraph/auragraphHome.png"},
        ],
    },
    universe: {
        slug: 'universe',
        title: 'Universe',
        href: 'https://github.com/UniVerse-App/UniVerse',
        githubHref: 'https://github.com/UniVerse-App/UniVerse',
        description: 'UniVerse is a mobile application for Android phones designed to assist students and organizers alike in creating, managing, finding, and attending on-campus events. The app’s core feature is a personalized “feed” that will display upcoming events and activities relevant to each user. From the feed, users will be able to view details on each event and RSVP to events they wish to attend. UniVerse is written entirely in Java, and its dependencies include FirebaseAuth, FirebaseStorage, FirebaseDatabase, and Glide.',
        madeWith: [
            {name: 'Android', icon: IconBrandAndroid},
            {name: 'Firebase', icon: IconBrandFirebase},
            {name: 'Java', icon: IconCoffee},
        ],
        screenshots: [
            {alt: 'Title Illustration', url: '/images/universe/universePreview.png'},
        ],
    },
    asketch: {
        slug: 'asketch',
        title: 'ASketch',
        href: 'https://github.com/adamgemerson/asketch',
        githubHref: 'https://github.com/adamgemerson/asketch',
        description: 'ASKetch is a no-code solution for building unit tests in the software modelling language Alloy. This project is still in active development and is the primary work of my undergraduate research. More information is coming soon.',
        madeWith: [
            {name: 'Typescript', icon: IconBrandTypescript},
            {name: 'React', icon: IconBrandReact},
            {name: 'Electron', icon: IconAtom},
            {name: 'SQLite', icon: IconDatabase},
            {name: 'Prisma', icon: IconBrandPrisma}
        ],
        screenshots: [
            {alt: 'Title Illustration', url: '/images/asketch/asketchPreview.png'},
        ],
    }
})