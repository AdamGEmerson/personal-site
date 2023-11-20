<script>
  import LinkButton from "../../../components/LinkButton.svelte";
  import LinkIcon from "../../../components/LinkIcon.svelte";
  import resumeImage from "../../../AdamEmerson_ResumeOct22.png";
  import resumePDF from "../../../AdamEmerson_Resume.pdf";
  import {IconBook, IconBrandLinkedin, IconDownload} from "@tabler/icons-svelte";

</script>

<div class="h-screen w-full z-50">
    <h1>Adam G. Emerson</h1>
    <h2>HCI Research & Software Development</h2>
    <LinkButton text="PDF" route={resumePDF} icon={IconDownload} />
    <div class="cv-section" id="about">
        <h3>About</h3>
        <div class="flex flex-row w-full p-4">
            <p>An experienced web developer with a background in design and film production. Currently researching Human Computer Interaction with a focus on leveraging AI technologies to support, rather than displace, creative professionals.</p>
        </div>
    </div>
    <div class="cv-section" id="education">
        <h3>Education</h3>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2020 - 2023</div>
            <div class="flex flex-col">
                <div class="font-bold">Bachelor of Science, Software Engineering</div>
                <div class="italic">Magna Cum Laude</div>
                <div>University of Texas at Arlington</div>
            </div>
        </div>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2020 - 2022</div>
            <div class="flex flex-col">
                <div class="font-bold">Associate of Science, Engineering</div>
                <div class="italic">High Honors</div>
                <div>Tarrant County College</div>
            </div>
        </div>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2020 - 2022</div>
            <div class="flex flex-col">
                <div class="font-bold">Associate of Arts</div>
                <div class="italic">High Honors</div>
                <div>Tarrant County College</div>
            </div>
        </div>
    </div>
    <div class="cv-section" id="publications">
        <h3>Peer-Reviewed Publications</h3>
        <div class="flex flex-row w-full p-4">
            <div id="" class="entry-dates">2023</div>
            <div class="flex flex-col">
                <a href="https://hybridatelier.cearto.com/projects/83-bridgeit" class="group">
                    <div  class="group-hover:underline">BridgeIt: Crossing the Knowledge Gaps Between Maker Communities of Practice</div>
                    <div><span class="font-bold">Adam G. Emerson</span>, Cesar Torres</div>
                    <div class="italic">ISAM '23 - Poster & Extended Abstract</div>
                </a>
            </div>
        </div>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2023</div>
            <div class="flex flex-col">
                <a href="https://ieeexplore.ieee.org/document/10299937" class="group">
                    <div class="group-hover:underline">Crucible: Graphical Test Cases for Alloy Models</div>
                    <div><span class="font-bold">Adam G. Emerson</span>, Allison Sullivan</div>
                    <div class="italic">ISSRE '23 - Full Paper</div>
                </a>
            </div>
        </div>
    </div>
    <div class="cv-section" id="writing">
        <h3>Other Writing</h3>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2023</div>
            <div>
                <div>BridgeIt: Spanning Knowledge Gaps Among Maker Communities Using Video Tutorial Transcripts</div>
                <div><span class="font-bold">Adam G. Emerson</span>, Shreyosi Endow, Cesar Torres</div>
                <div class="italic">Preprint</div>
            </div>
        </div>
    </div>
    <div class="cv-section" id="professional">
        <h3>Professional Experience</h3>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2023</div>
            <div class="flex flex-col">
                <div class="font-bold">Research Assistant - Human Computer Interaction</div>
                <div class="italic">REU Site, The Hybrid Atelier – Arlington, TX</div>
            </div>
        </div>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2022 - 2023</div>
            <div class="flex flex-col">
                <div class="font-bold">Research Assistant - Software Testing</div>
                <div class="italic">REU Individual Experience, SCOPE Lab – Arlington, TX</div>
            </div>
        </div>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2020 - 2022</div>
            <div class="flex flex-col">
                <div class="font-bold">Full Stack Engineer</div>
                <div class="italic">Planet Access – Dallas, TX</div>
            </div>
        </div>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2019 - 2020</div>
            <div class="flex flex-col">
                <div class="font-bold">Producer</div>
                <div class="italic">Yacht Club – Brooklyn, NY</div>
            </div>
        </div>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2017 - 2019</div>
            <div class="flex flex-col">
                <div class="font-bold">Film Production</div>
                <div class="italic">Freelance – Brooklyn, NY</div>
            </div>
        </div>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2015 - 2016</div>
            <div class="flex flex-col">
                <div class="font-bold">Co-Founder, Art Director</div>
                <div class="italic">Sunstruck Magazine – Flagstaff, AZ</div>
            </div>
        </div>
    </div>
    <div class="cv-section" id="projects">
        <h3>Personal Projects</h3>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2023</div>
            <div class="flex flex-col">
                <a href="https://hybridatelier.cearto.com/projects/83-bridgeit" class="group">
                    <div class="font-bold">BridgeIt - <span class="font-normal group-hover:underline">Link</span></div>
                    <div class="italic">Web Application - Typescript, React, Postgres, Youtube API</div>
                </a>
            </div>
        </div>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2023</div>
            <div class="flex flex-col">
                <a href="https://github.com/Crucible-Alloy/Crucible" class="group">
                    <div class="font-bold">Crucible - <span class="font-normal group-hover:underline">Link</span></div>
                    <div class="italic">Desktop Application - Typescript, Electron, React, Java, Springboot</div>
                </a>
            </div>
        </div>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2022</div>
            <div class="flex flex-col">
                <a href="https://auragraph.io/" class="group">
                    <div class="font-bold">Auragraph.io - <span class="font-normal group-hover:underline">Link</span></div>
                    <div class="italic">Web Application - React, Next.js, D3, Spotify API</div>
                </a>
            </div>
        </div>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2022</div>
            <div class="flex flex-col">
                <a href="https://github.com/UniVerse-App/UniVerse" class="group">
                    <div class="font-bold">UniVerse - <span class="font-normal group-hover:underline">Link</span></div>
                    <div class="italic">Android Application - Java, Firebase</div>
                </a>
            </div>
        </div>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2018</div>
            <div class="flex flex-col">
                <a href="https://www.amazon.com/Adam-Emerson-Sightstone/dp/B07B2C1P5M" class="group">
                    <div class="font-bold">Sightstone - <span class="font-normal group-hover:underline">Link</span></div>
                    <div class="italic">Amazon Alexa Application - Python</div>
                </a>
            </div>
        </div>
    </div>
    <div class="cv-section" id="volunteering">
        <h3>Volunteering</h3>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2023 - Present</div>
            <div class="flex flex-col">
                <div class="font-bold">IT Consultation and Software Support</div>
                <div class="italic">East Texas Foodbank - Tyler, TX</div>
            </div>
        </div>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2022 - 2023</div>
            <div class="flex flex-col">
                <div class="font-bold">IT Consultation and Software Support</div>
                <div class="italic">Midwest Foodbank - Fort Worth, TX</div>
            </div>
        </div>
    </div>
    <div class="cv-section" id="awards">
        <h3>Awards & Recognition</h3>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2023</div>
            <div class="flex flex-col">
                <div class="font-bold">Honor Roll - Spring ' 23</div>
                <div class="italic">University of Texas at Arlington</div>
            </div>
        </div>
        <div class="flex flex-row w-full p-4">
            <div class="entry-dates">2021</div>
            <div class="flex flex-col">
                <div class="font-bold">Dean's List - Spring & Fall</div>
                <div class="italic">Tarrant County College</div>
            </div>
        </div>
    </div>
</div>

<style>
    h1 {
        @apply text-4xl font-bold my-4;
    }
    h2 {
        @apply text-xl font-bold my-4;
    }
    h3 {
        @apply text-xl font-bold my-4 border-b-2 border-white;
    }
    .cv-section {
        @apply my-8;
    }
    .entry-dates {
        @apply mr-8 w-2/12;
    }



</style>