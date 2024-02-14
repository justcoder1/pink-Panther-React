import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useIntlCommon } from "./_utils/lang/intl-common";

import AboutPageView from "./presentation/AboutPage/pages/AboutPageView";
import AppendixPageView from "./presentation/AppendixPage/pages/AppendixPageView";
import GalleryPageView from "./presentation/GalleryPage/pages/GalleryPageView";
import HistoryPageView from "./presentation/HistoryPage/pages/HistoryPageView";
import HomePageView from "./presentation/HomePage/pages/HomePageView";
import LandingPageView from "./presentation/LandingPage/pages/LandingPageView";
import UserPageView from "./presentation/User/pages/UserPageView";
import PageNotFoundView from "./presentation/_AuthenticatedLayout/pages/PageNotFound/PageNotFoundView";

const App: React.FC = () => {
  const { siteLabel } = useIntlCommon();

  useEffect(() => {
    document.title = siteLabel;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFoundView />} />
        <Route path="/" element={<LandingPageView />} />
        <Route path="/home" element={<HomePageView />} />
        <Route path="/about" element={<AboutPageView />} />
        <Route path="/appendix" element={<AppendixPageView />} />
        <Route path="/gallery/picture" element={<GalleryPageView />} />
        <Route path="/gallery/video" element={<GalleryPageView />} />
        <Route path="/history" element={<HistoryPageView />} />
        <Route path="/user" element={<UserPageView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
