export function saveItems(items) {
  localStorage.setItem('items', JSON.stringify(items));
}

export function loadItems() {
  return JSON.parse(localStorage.getItem('items'));
}
