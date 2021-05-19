export const getKeyword = JSON.parse(localStorage.getItem('keywords'));
export const getSettings = JSON.parse(localStorage.getItem('settings'));

export const setObjectToLocalStorage = (name, key, value) => {
  let existing = localStorage.getItem(name);
  existing = existing ? JSON.parse(existing) : {};
  existing[key] = value;

  localStorage.setItem(name, JSON.stringify(existing));
};
