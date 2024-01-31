export type ViewModelHook<TModel, TOptions = void> = (
  options: TOptions
) => TModel;

export type tableTypes = 'string' | 'number' | 'date' | 'html'