// Internal plugin import
import { fetchMovies, searchMovies } from './movie';

// External plugin import
import { initSortable } from './plugins/init_sortable';
import { initMarkdown } from './plugins/init_markdownit';
import { initSelect2 } from './plugins/init_select2';

// Element selection
const submit = document.querySelector("#submit");

// Plugin calls
fetchMovies("star wars");
initSortable();
initMarkdown();
initSelect2();

// Events
submit.addEventListener("click", searchMovies);
