import { User, useStore } from './store';

/**
 * Storage functions.
 * We store the user's credentials in localStorage.  This can also be stored:
 * * in a cookie
 * * in memory
 * * on the server side.
 */
const USER_KEY = 'web-starter-user';

function getUserFromStorage() {
  try {
    const userString = window.localStorage.getItem(USER_KEY);
    if (!userString) return undefined;
    return (JSON.parse(userString) as User) || undefined;
  } catch (err) {
    return undefined;
  }
}

export function saveUserToStorage(user: User) {
  window.localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearUserFromStorage() {
  window.localStorage.removeItem(USER_KEY);
}

/**
 * Utility functions to sync storage ("localStorage") and memory ("Zustand")
 * functionalities.
 */
export function setupAuth() {
  const user = getUserFromStorage();
  if (!user) {
    clearUserFromStorage();
    useStore.getState().clearUser();
  } else {
    useStore.getState().setUser(user);
  }
}
export function getToken() {
  return useStore.getState().user?.token;
}
