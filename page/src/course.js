const init = () => {
    console.log('init');
    let frontendButton = document.getElementsByClassName('button-group__button--frontend')[0],
        backendButton = document.getElementsByClassName('button-group__button--backend')[0],
        frontendList = document.getElementsByClassName('courses__wrap--frontend')[0],
        backendList = document.getElementsByClassName('courses__wrap--backend')[0];
    frontendButton.addEventListener('click', () => {
        if(frontendButton.classList.contains('button-group__button--active')){
            backendList.style.display = 'block';
            frontendButton.classList.remove('button-group__button--active');
        } else {
            backendList.style.display = 'none';
            frontendButton.classList.add('button-group__button--active');
        }
        backendButton.classList.remove('button-group__button--active');
        frontendList.style.display = 'block';
    });
    backendButton.addEventListener('click', () => {
        backendList.style.display = 'block';
        if(backendButton.classList.contains('button-group__button--active')){
            frontendList.style.display = 'block';
            backendButton.classList.remove('button-group__button--active');
        } else {
            frontendList.style.display = 'none';
            backendButton.classList.add('button-group__button--active');
        }
        frontendButton.classList.remove('button-group__button--active');
        backendList.style.display = 'block';
    });
};

window.onload = init;