'use strict';

{
    const tab = document.getElementById('tab');
    const tabItems = tab.querySelectorAll('li a');
    const inner = document.getElementById('inner');
    const contents = inner.querySelectorAll('.content');

    tabItems.forEach(clickedItem => {
        clickedItem.addEventListener('click', e => {
            e.preventDefault();

            tabItems.forEach(item => {
                item.classList.remove('active');
            });
            clickedItem.classList.add('active');
            
            contents.forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(clickedItem.dataset.id).classList.add('active');
        });
    });
}