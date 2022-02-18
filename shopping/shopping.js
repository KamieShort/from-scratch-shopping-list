import {
    checkAuth,
    logout,
    fetchItems,
    createItem,
    completeItem,
    deleteAllItems,
} from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const form = document.querySelector('.list-form');
const deleteButton = document.getElementById('delete');

logoutButton.addEventListener('click', () => {
    logout();
});

async function renderItems() {
    const itemsList = document.getElementById('item-list');
    itemsList.textContent = '';
    const items = await fetchItems();
    for (let item of items) {
        const li = renderItem(item);
        li.addEventListener('click', async () => {
            await completeItem(item.id);

            renderItems();
        });
        itemsList.append(li);
    }
}
renderItems();

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const item = data.get('item');
    await createItem(item);
    renderItems();
    form.reset();
});

deleteButton.addEventListener('click', async () => {
    await deleteAllItems();
    renderItems();
});
