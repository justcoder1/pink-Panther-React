import { type AxiosResponse } from "axios";
import { DB_API } from "../../../_utils/hooks/functions";
import { type T_AppendixData } from "../components/AppendixTable/use-appendix-table.view-model";

export const getAppendixs = async (): Promise<T_AppendixData[]> => {
  return await DB_API.get("/pinkpanther/appendix").then((res) => res.data.data);
};

export const createAppendix = async (data: T_AppendixData): Promise<AxiosResponse> => {
  return await DB_API.post("/pinkpanther/appendix", data);
};

export const updateAppendix = async (data: T_AppendixData): Promise<AxiosResponse> => {
  return await DB_API.put("/pinkpanther/appendix", data);
};

export const deleteAppendix = async (id: string): Promise<AxiosResponse> => {
  return await DB_API.delete(`/pinkpanther/appendix?id=${id}`);
};
