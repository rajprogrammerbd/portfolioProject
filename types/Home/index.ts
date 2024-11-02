export type Colors = '#050709' | 'white';

export interface HomepageState {
    color: {
      bgColor: Colors;
      textColors: {
          color1: string;
          color2: string;
      }
    };
    loaded: boolean;
}

export type NavList = {
  id: number;
  name: string;
}

export interface INavbar {
  lists: NavList[];
}


export interface HomeState {
  lists: NavList[];
}

export interface IHeaderProps {
  color1: string;
}

export interface IBodyContainerProps {
  lists: NavList[];
  showMenu: () => void;
}

export interface INavContainerItemsProps {
  lists: NavList[];
}

export interface IBodyContainerState {
  width: number;
  height: number;
}

export interface HeaderAnimatedBoxState {
  width: number;
  height: number;
}

export type IServiceItem = {
  id: string;
  title: string;
  paragraph: string;
}

export interface BodyServiceState {
  lists: IServiceItem[];
  activeId: string;
}

export type ListOfPortfolioOptionsType = {
  id: number;
  name: string;
}

export interface IPortfolioState {
  lists: ListOfPortfolioOptionsType[];
  isActive: number;
  TotalListOfProjects: RecentWorksTypes[][];
  hover: boolean;
  hoveredID: null | number;
}

export interface RecentWorksTypes {
  projectId: number;
  id: number;
  name: string;
  description: string;
  url: string;
}

export type BlogPostType = {
  id: number;
  title: string;
  description: string;
  img: string | null;
  posted_date: string;
  category: string;
  post_link: string;
}

export interface IBlogsState {
  lists: BlogPostType[];
}

export type IDisplayMenu = {
  lists: NavList[];
  showMenu: () => void;
}
