import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useIntlCommon } from "./lang/intl-common";

import AboutPageView from "./presentation/AboutPage/pages/AboutPageView";
import AppendixPageView from "./presentation/AppendixPage/pages/AppendixPageView";
import GalleryPageView from "./presentation/GalleryPage/pages/GalleryPageView";
import HistoryPageView from "./presentation/HistoryPage/pages/HistoryPageView";
import HomePageView from "./presentation/HomePage/pages/HomePageView";
import UserPageView from "./presentation/User/pages/UserPageView";

const App: React.FC = () => {
  const { siteLabel } = useIntlCommon();

  useEffect(() => {
    document.title = siteLabel;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="/about" element={<AboutPageView />} />
        <Route path="/appendix" element={<AppendixPageView />} />
        <Route path="/gallery" element={<GalleryPageView />} />
        <Route path="/history" element={<HistoryPageView />} />
        <Route path="/home" element={<HomePageView />} />
        <Route path="/user" element={<UserPageView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
