import './style.css';
import { getUsers, deleteUser } from './api/users-api';

getUsers().then(results => {
  let usersTable = '';
  results.forEach(user => {
    usersTable += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.first_name} ${user.last_name}</td>
        <td>${user.email}</td>
      </tr>`;
  });
  global.document.getElementById('users').innerHTML = usersTable;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getElementByClassName only returns an 'array like' object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes['data-id'].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
