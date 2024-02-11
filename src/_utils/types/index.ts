export type ViewModelHook<TModel, TOptions = void> = (options: TOptions) => TModel;

export type TableTypes = "string" | "number" | "date" | "html";
