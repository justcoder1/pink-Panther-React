import type { T_AboutPageLayout } from "../../presentation/AboutPage/components/AboutPageLayout/use-about-page-layout.view-model";
import type { T_AppendixData } from "../../presentation/AppendixPage/components/AppendixTable/use-appendix-table.view-model";
import type {
  T_GalleryPicture,
  T_GalleryVideo,
} from "../../presentation/GalleryPage/components/GalleryPageLayout/use-gallery-page-layout.view-model";
import type { T_HistoryPageLayoutModel } from "../../presentation/HistoryPage/components/HistoryPageLayout/use-history-page-layout.view-model";
import type { T_SocialData } from "../../presentation/HomePage/components/Socials/use-socials.view-model";
import type { T_NavBarItem } from "../../presentation/_AuthenticatedLayout/components/NavBar/use-navbar.view-model";

// mutating the window object to access CSRF token
declare global {
  interface Window {
    CSRF_TOKEN: string;
  }
}

export type ViewModelHook<TModel, TOptions = void> = (options: TOptions) => TModel;

export type T_ResponseUser = {
  _id: string;
  id: number;
  slug: string;
  name: string;
  emailAddress: string;
  roleId: string;
  role: string;
  ableToEdit: boolean;
  createAt: Date;
};

export type T_Response = {
  status: "success" | "error";
  message?: string;
  data?:
    | T_ResponseUser
    | T_AboutPageLayout
    | T_AppendixData[]
    | T_GalleryPicture[]
    | T_GalleryVideo[]
    | T_HistoryPageLayoutModel
    | T_SocialData[]
    | T_NavBarItem[];
};
