import type { PageLoad } from "./$types";
import {preloadData} from "$app/navigation";

export const load = ( async () => {
    const info = {
        name: "Adam G. Emerson",
        title: "HCI Research and Web Development",
        description: "3+ years of experience in full-stack web, desktop, and mobile application development."
    }

    return {
        info
    };
});