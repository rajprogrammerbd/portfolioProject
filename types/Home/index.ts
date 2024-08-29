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
