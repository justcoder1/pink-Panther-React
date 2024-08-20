import type { AxiosResponse } from "axios";
import { DB_API } from "../../../_utils/http/paths";
import type { T_AppendixData } from "../components/AppendixTable/use-appendix-table.view-model";
import type { T_Response } from "../../../_utils/types";

export const getAppendices = async (): Promise<T_Response> => {
  return await DB_API.get("/appendix", { withCredentials: true }).then((res) => res.data.data);
};

export const createAppendix = async (data: T_AppendixData): Promise<AxiosResponse> => {
  return await DB_API.post("/appendix", data, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      userCsrf: window.CSRF_TOKEN,
    },
  });
};

export const updateAppendix = async (data: T_AppendixData): Promise<AxiosResponse> => {
  return await DB_API.put("/appendix", data, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      userCsrf: window.CSRF_TOKEN,
    },
  });
};

export const deleteAppendix = async (id: string): Promise<AxiosResponse> => {
  return await DB_API.delete(`/appendix?id=${id}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      userCsrf: window.CSRF_TOKEN,
    },
  });
};
