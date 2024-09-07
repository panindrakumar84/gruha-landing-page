import customer1 from "../assets/user-1.png"
import customer2 from "../assets/user-2.png"
import customer3 from "../assets/user-3.png"
import customer4 from "../assets/user-4.png"
import { ShieldCheck, Fingerprint, Cctv, Lamp, Router, Fan } from "lucide-react"

export const navLinks = [
    {href:"#home",label:"Home"},
    {href:"#about-us",label:"About"},
    {href:"#features",label:"Features"},
    {href:"#testimonials",label:"Testimonials"},
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
        icon: Cctv,
        title: "Lorem ipsum dolor sit.",
        feature: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ducimus."
    },
    {
        icon: ShieldCheck,
        title: "Lorem ipsum dolor sit.",
        feature: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ducimus."
    },
    {
        icon: Fan,
        title: "Lorem ipsum dolor sit.",
        feature: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ducimus."
    },
    {
        icon: Router,
        title: "Lorem ipsum dolor sit.",
        feature: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ducimus."
    },
    {
        icon: Fingerprint,
        title: "Lorem ipsum dolor sit.",
        feature: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ducimus."
    },
    {
        icon: Lamp,
        title: "Lorem ipsum dolor sit.",
        feature: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ducimus."
    },
]

