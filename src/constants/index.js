import customer1 from "../assets/user-1.png"
import customer2 from "../assets/user-2.png"
import customer3 from "../assets/user-3.png"
import customer4 from "../assets/user-4.png"
import { ShieldCheck, Fingerprint, MonitorCog, Lamp, Router, UserRoundCog } from "lucide-react"

export const navLinks = [
    {href:"#home",label:"Home"},
    {href:"#about-us",label:"About"},
    {href:"#features",label:"Features"},
    {href:"#contact-us",label:"Contact"},
    
]

export const reviews = [
    {
        imgUrl:customer1,
        name: "Morich Brown",
        address: "California, USA",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur exercitationem !"
    },
    {
        imgUrl: customer2,
        name: "Panindra Kumar",
        address: "Florida, USA",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur exercitationem a perferendis!"
    },
    {
        imgUrl:customer3,
        name: "Lota Mongeskar",
        address: "Texas USA",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur exercitationem a dolor!"
    },
    {
        imgUrl: customer4,
        name:"Jaswanth",
        address: "California",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur exercitationem perferendis dolor!"
    }
]

export const features = [
    {
        icon: MonitorCog,
        title: "One App for Everything",
        feature: "Say goodbye to app clutter! With our system, you'll only need one app to control all your smart home devices."
    },
    {
        icon: ShieldCheck,
        title: "Your Home, Your Privacy",
        feature: "Your smart home should be smart enough to work without constantly connecting to the internet. We keep your data safe and your devices working, even if the internet is down."
    },
    {
        icon: UserRoundCog,
        title: "Your Home, Your Rules",
        feature: "Want your lawn watered only when it's really needed? Or lights that turn on just as you walk in? We make it easy to set up your home to work exactly how you want it with flexible automation rules."
    },
    {
        icon: Router,
        title: "Talk to Your Home",
        feature: "(Coming Soon) Soon, you'll be able to control your home with your voice, using words that feel natural to you."
    },
    
]

export const control = [
    "Door locks for better security",
    "Sensors to know when doors open",
    "Lights and switches",
    "Window blinds",
    "Air conditioning and heating",
   "And much more!",
]