import { HomepageState, IServiceItem, NavList } from "@/types/Home";

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
        name: 'About'
    },
    {
        id: 3,
        name: 'Portfolio'
    },
    {
        id: 4,
        name: 'Blogs'
    },
    {
        id: 5,
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
]