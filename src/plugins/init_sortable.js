// import plugin
import Sortable from 'sortablejs';

// init function
const initSortable = () => {
  const list = document.getElementById('results');
  // Sortable.create(list);
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 1500,
    // onEnd: (event) => {
    //   alert(`${event.oldIndex} moved to ${event.newIndex}`);
    // }
  });
};

// export to index.js
export { initSortable };
