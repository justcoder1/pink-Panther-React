import React from "react";
import AuthenticatedLayoutView from "../../_AuthenticatedLayoutView/pages/Authenticated/AuthenticatedLayoutView";
import useHistoryViewModel from "./use-history-page.view-model";

export interface HistoryPageViewProps {}

const HistoryPageView: React.FC<
  React.PropsWithChildren<HistoryPageViewProps>
> = () => {
  const vm = useHistoryViewModel();

  return (

  <AuthenticatedLayoutView>
      <div>Series number<br />Title<br />Broadcast run<br />Original channel<br />Total # episodes<br />Total # seasons<br /><br />1<br /><br /><i><a href="./The_Pink_Panther_Show" title="The Pink Panther Show">The Pink Panther Show</a></i><br /><br />1969–1979<br /><br /><a href="./NBC" title="NBC">NBC</a> (1969–1978)<br /><br /><a href="./American_Broadcasting_Company" title="American Broadcasting Company">ABC</a> (1978–1979)<br /><br />Three 6-minute shorts + bumpers per half-hour<br /><br />10<br /><br />2<br /><br /><i><a href="./Pink_Panther_and_Sons" title="Pink Panther and Sons">Pink Panther and Sons</a></i><br /><br />1984–1986<br /><br />NBC (1984–1985)<br /><br />ABC (1986)<br /><br />26 episodes<br /><br />1<br /><br />3<br /><br /><i><a href="./The_Pink_Panther_(TV_series)" title="The Pink Panther (TV series)">The Pink Panther</a></i><br /><br />1993–1995<br /><br /><a href="./Broadcast_syndication" title="Broadcast syndication">Syndication</a><br /><br />60 episodes<br /><br />2<br /><br />4<br /><br /><i><a href="./Pink_Panther_and_Pals" title="Pink Panther and Pals">Pink Panther and Pals</a></i><br /><br />2010<br /><br /><a href="./Cartoon_Network" title="Cartoon Network">Cartoon Network</a><br /><br />26 episodes<br /><br />1</div>
  </AuthenticatedLayoutView>
  )
};

export default HistoryPageView;
