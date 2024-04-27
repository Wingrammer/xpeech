import { buildLegacyTheme } from "sanity"

const props = {
    "--glad-brand": "#f7ab0a",
    "--my-yellow": "#f4b400",
    "--my-green": "#0f9d58",
    "--green-head":"#05F2DB",
    "--gold-head":"#BFA65A",
    "--blue-head":"#0F50A6",
    "--my-black":"#0D0D0D",
    "--my-white":"#fff",
    "--my-red":"#BF2121"
}

export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",

    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],

    /* Brand */
    "--brand-primary": props["--glad-brand"],
    
    /* Default Button */
    "--default-button-color": "#666",
    "--default-button-primary-color":props["--glad-brand"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-yellow"],
    "--default-button-danger-color": props["--my-red"],

    /* State */
    "--state-info-color": props["--glad-brand"],
    "--state-success-color":  props["--my-green"],
    "--state-warning-color": props["--my-yellow"],
    "--state-danger-color": props["--my-red"],

    /*Navbar */
    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],

    "--focus-color": props["--glad-brand"],
})