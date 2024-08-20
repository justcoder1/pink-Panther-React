import { QueryClient } from "@tanstack/react-query";
import type { T_ResponseUser } from "../types/index";
export const noop = (): void => {};

export function setGlobals(loginUser: T_ResponseUser): void {
  // Had to use localstorage because if the page refreshed it lost this information.
  sessionStorage.setItem("responseUser", JSON.stringify(loginUser));
}

export function getGlobals(): T_ResponseUser {
  return JSON.parse(sessionStorage.getItem("responseUser"));
}

export function deleteGlobals(): void {
  sessionStorage.removeItem("responseUser");
}

export function clearUser(): void {
  // This clears React Query cached data
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  queryClient.removeQueries();
  // Removes user from session storage
  sessionStorage.clear();
}
