import { DB_API } from "../../../_utils/hooks/functions";

export const getAppendixs = async () => {
  return DB_API.get("/pinkpanther/appendix").then((res) => res.data.data);
};

export const createAppendix = async (data) => {
  return DB_API.post("/pinkpanther/appendix", data);
};

export const updateAppendix = async (data) => {
  return DB_API.put("/pinkpanther/appendix", data);
};

export const deleteAppendix = async (id) => {
  return DB_API.delete(`/pinkpanther/appendix?id=${id}`);
};
