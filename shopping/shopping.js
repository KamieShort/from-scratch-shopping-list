import { checkAuth, logout, fetchItems } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

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
