import Display from "../components/Display";
import CircularCardContent from '../components/CircularCardsPage/CircularCardContent';
import SquareCardsContent from '../components/SquareCardsPage/SquareCardsContent';
import BhajanVideosPage from '../components/BhajanVideos/BhajanVideosPage';
import Favourites from '../components/pages/Favourites';
import Settings from '../components/pages/Settings';

export const routes = [
  {
    path: "/",
    component: Display,
    label: "Home"
  },
  {
    path: "/deity/:deityName",
    component: CircularCardContent,
    label: "Deity"
  },
  {
    path: "/category/:categoryName",
    component: SquareCardsContent,
    label: "Category"
  },
  {
    path: "/videos",
    component: BhajanVideosPage,
    label: "Videos"
  },
  {
    path: "/favourites",
    component: Favourites,
    label: "Favourites"
  },
  {
    path: "/settings",
    component: Settings,
    label: "Settings"
  }
];
