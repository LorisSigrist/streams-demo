import { Contact } from "./types";

const list = document.getElementById('contacts') as HTMLDivElement;

export function display(contact: Contact) {
    const item = document.createElement('tr');
    item.innerHTML = `
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${contact.name}</td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${contact.position}</td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${contact.email}</td>
    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
      <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
    </td>
    `
    list.appendChild(item);
}