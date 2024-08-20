import { useSuspenseQuery } from "@tanstack/react-query";
import { useIntl } from "react-intl";
import type { ViewModelHook } from "../../../../_utils/types/index";
import { getAbout } from "../../_connections/connections";

export type T_AboutPageLayout = {
  title: string;
  subTitle: string;
  contents: string;
};

const useAboutPageLayoutModel: ViewModelHook<T_AboutPageLayout> = () => {
  const intl = useIntl();

  // API data
  const { data: aboutData }: { data: T_AboutPageLayout } = useSuspenseQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });

  try {
    const title = intl.formatMessage({
      id: "title",
      defaultMessage: `${aboutData ? aboutData.title : "loading"}`,
    });
    const subTitle = intl.formatMessage({
      id: "subTitle",
      defaultMessage: `${aboutData ? aboutData.subTitle : "loading"}`,
    });
    const contents = intl.formatMessage({
      id: "contents",
      defaultMessage: `${aboutData ? aboutData.contents : "loading"}`,
    });

    return {
      title,
      subTitle,
      contents,
    };
  } catch (error) {
    return error;
  }
};

export default useAboutPageLayoutModel;
