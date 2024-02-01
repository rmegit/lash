import '../scss/style.scss'

// accordeon section program
const program_item = document.querySelectorAll('.program-item')

program_item.forEach((item) => {
    const program_header = item.querySelector('.program-item_head');
    program_header.addEventListener('click', () => {
        const program_content = item.querySelector('.program-item_content');

        const program_content_actived = document.querySelector('.active')
        
        ActiveBtnProgram(item, program_content, program_content_actived)
    });
});

function ActiveBtnProgram(item, content, program_content_actived) {
    const program_icon = item.querySelector('.program-item_icon');
    const program_icons = document.querySelectorAll('.program-item_icon');
    program_icons.forEach((item) => (item.innerHTML = '+'));

    if (program_content_actived) {
        program_content_actived.style.height = 0
        program_content_actived.classList.remove('active');
    }

    if (content !== program_content_actived) {
        program_icon.innerHTML = '-'
        content.classList.add('active')
        content.style.height = content.scrollHeight + 10 + "px";
    }
}


// accordeon section questions
const questions_item = document.querySelectorAll('.accordeon-item')

questions_item.forEach((item) => {
    const questions_header = item.querySelector('.accordeon-item_head');
    questions_header.addEventListener('click', () => {
        const questions_content = item.querySelector('.accordeon-item_content');

        const questions_content_actived = document.querySelector('.active')
        
        ActiveBtn(item, questions_content, questions_content_actived)
    });
});

function ActiveBtn(item, content, questions_content_actived) {
    const questions_icon = item.querySelector('.accordeon-item_icon');
    const questions_icons = document.querySelectorAll('.accordeon-item_icon');
    questions_icons.forEach((item) => (item.innerHTML = '+'));

    if (questions_content_actived) {
        questions_content_actived.style.height = 0
        questions_content_actived.classList.remove('active');
    }

    if (content !== questions_content_actived) {
        questions_icon.innerHTML = '-'
        content.classList.add('active')
        content.style.height = content.scrollHeight + 10 + "px";
    }
}

// burgermenu

let burgerMenu = document.querySelector('.burger')

let navLink = document.querySelector('.nav-links')

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active')
    navLink.classList.toggle('active')
    
})
