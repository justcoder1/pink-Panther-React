import { DB_API } from "../../../_utils/hooks/functions";

export const getAppendixs = async (): Promise<any> => {
  return await DB_API.get("/pinkpanther/appendix").then((res) => res.data.data);
};

export const createAppendix = async (data): Promise<any> => {
  return await DB_API.post("/pinkpanther/appendix", data);
};

export const updateAppendix = async (data): Promise<any> => {
  return await DB_API.put("/pinkpanther/appendix", data);
};

export const deleteAppendix = async (id: string): Promise<any> => {
  return await DB_API.delete(`/pinkpanther/appendix?id=${id}`);
};
