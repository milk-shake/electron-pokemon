const {remote} = require('electron');
const Menu = remote.Menu;
const MenuItem = remote.MenuItem;

let rightClickPosition = null

const menu = new Menu()
const menuItem = new MenuItem({
  label: 'Inspect Element',
  click: () => {
    remote.getCurrentWindow().inspectElement(rightClickPosition.x, rightClickPosition.y)
  }
})
menu.append(menuItem)

window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  rightClickPosition = {x: e.x, y: e.y}
  menu.popup(remote.getCurrentWindow())
}, false)


//
// // window.addEventListener('contextmenu', function (e) {
// //   e.preventDefault();
// //   ContextMenu.createMenu();
// //   menu.popup(remote.getCurrentWindow());
// // }, false);
//
//
// export default class ContextMenu {
//   constructor() {
//
//   }
//
//   static createMenu(type) {
//     switch(type) {
//       default: {
//         menu.append(new MenuItem({ label: 'MenuItem1', click: function() { console.log('item 1 clicked'); } }));
//         menu.append(new MenuItem({ type: 'separator' }));
//         menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }));
//       }
//     }
//   }
// }
