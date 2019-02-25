function createSelect() {
    let selects = document.getElementsByClassName('item-select');
    let row = '';
    for (let i = 0; i < selects.length; i++) {
        row =   `<div class='custom-select' data-id=''>
                    <div class='title-select'>
                        Change option
                    </div>
                    <div class='icon-select'>
                        <i class='fa fa-chevron-down'></i>
                    </div>
                </div>
                <div id='optionSelect' class='option-custom-select'>
                    <div class='item-option'>
                        Add new options
                    </div>
                </div>`;
        selects[i].innerHTML = row;
    }
    resizeSelect();
    clickOnSelect();
} createSelect();

function select(item, array) {
    let option = item.children[1];
    let row = '';
    for (let i = 0; i < array.length; i++) {
        row +=  `<div class='item-option' data-id='${array[i].id}'>
                    ${array[i].title}
                </div>`;
    }
    option.innerHTML = row;
}

function resizeSelect() {
    let option = document.getElementsByClassName('option-custom-select');
    let width = '';
    for (let i = 0; i < option.length; i++) {
        width = option[i].previousElementSibling.clientWidth;
        option[i].style.width = width + 'px';
    }
} 

function clickOnSelect() {
    let selects = document.getElementsByClassName('custom-select');
    Array.from(document.getElementsByClassName('custom-select')).forEach(item => {
        item.onclick = function() {
            for (let i = 0; i < selects.length; i++) {
                if (selects[i].nextElementSibling.style.display == 'block') {
                    selects[i].nextElementSibling.style.display = 'none';
                }
            }
            let option = item.nextElementSibling;
            option.style.display = 'block';
            clickDontSelect(item, option);
            clickOnOption(item.children[0]);
        };
    });
} 

function clickOnOption(title) {
    Array.from(document.getElementsByClassName('item-option')).forEach(item => {
        item.onclick = function() {
            let text = item.textContent.trim();
            title.textContent = text;
            title.style.opacity = '1';
        };
    });
}

function clickDontSelect(item, option) {
    document.onclick = function(e) {
        if (e.target != item && e.target != item.children[0] && e.target != item.children[1].children[0]) {
            option.style.display = 'none';
        }
    };
}