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
  data?: any;
};
