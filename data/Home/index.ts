import { BlogPostType, HomepageState, IServiceItem, ListOfPortfolioOptionsType, NavList, RecentWorksTypes } from "@/types/Home";

type Colors = HomepageState['color'];

export const BlackBackgroundStaticColors: Colors = {
    bgColor: '#050709',
    textColors: {
        color1: 'gray',
        color2: 'white'
    }
}

export const WhiteBackgroundStaticColors: Colors = {
    bgColor: 'white',
    textColors: {
        color1: 'black',
        color2: 'gray'
    }
}

export const ListOfNavbar: NavList[] = [
    {
        id: 0,
        name: 'Home'
    },
    {
        id: 1,
        name: 'Services'
    },
    {
        id: 2,
        name: 'Portfolio'
    },
    {
        id: 3,
        name: 'Blogs'
    },
    {
        id: 4,
        name: 'Contact'
    }
];

export const BodyServiceStateLists: IServiceItem[] = [
    {
        id: '01',
        title: 'Front-end Development',
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    },
    {
        id: '02',
        title: 'Backend Development',
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    },
    {
        id: '03',
        title: 'Mobile App Development',
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    }
];

export const ListOfPortfolioOptions: ListOfPortfolioOptionsType[] = [
    {
        id: 0,
        name: 'All'
    },
    {
        id: 1,
        name: 'UI Design'
    },
    {
        id: 2,
        name: 'Web App'
    }
];


export const ListOfProjectUIDesign: RecentWorksTypes[] = [];
export const ListOfProjectWebApp: RecentWorksTypes[] = [
    {
        id: 0,
        projectId: 2,
        name: 'Connect-Chat',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        url: '/connect-chat.jpg'
    },
    {
        id: 1,
        projectId: 2,
        name: 'Github Cheatsheet',
        description: 'Few helpful command of git',
        url: '/github-cheatsheet.jpg'
    },
    {
        id: 2,
        projectId: 2,
        name: 'Contacts Management',
        description: 'Applications for managing contact lists',
        url: '/contacts_management.JPG'
    }
];

export const ListOfProjectAll: RecentWorksTypes[] = [...ListOfProjectUIDesign, ...ListOfProjectWebApp];

export const TotalListOfProjects: RecentWorksTypes[][] = [
    ListOfProjectAll,
    ListOfProjectUIDesign,
    ListOfProjectWebApp
];

export const BlogPosts: BlogPostType[] = [
    {
        id: 0,
        title: 'JavaScript Engine & Javascript Is an Interpreted Language?',
        description: 'Javascript is a high-level programming language. Like every programming language...',
        img: '/js-logo.jpg',
        posted_date: 'Dec 02, 2020',
        category: 'IT Explore',
        post_link: 'https://medium.com/swlh/javascript-engine-javascript-is-an-interpreted-language-81586e9688fd'
    },
    {
        id: 1,
        title: 'File System (FS) module in Node.js',
        description: 'In node.js, the FS module handles the file system. Before discussing the FS module ...',
        posted_date: 'Nov 01 2024',
        category: 'IT Explore',
        post_link: 'https://medium.com/@rajprogrammerbd/file-system-fs-module-in-node-js-db0504f1995d',
        img: null
    }
];
