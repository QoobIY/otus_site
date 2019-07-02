const schedule = [
];

const description =  'Дороги в Эквадоре практически идеальные, ' +
        'хотя населенные пункты выглядят очень бедно. ' +
        'На дорогах много интересных машин, например очень много грузовиков - древних Фордов, ' +
        'которые я никогда раньше не видел. А еще несколько раз на глаза попадались старенькие Жигули :) ' +
        'А еще если кого-то обгоняешь и есть встречная машина, она обязательно включает фары. ' +
        'На больших машинах - грузовиках и автобусах, обязательно красуется местный тюнинг: машины разукрашенные, либо в наклейках, ' +
        'и обязательно везде огромное множество светодиодов, как будто новогодние елки едут и переливаются всеми цветами.';

const ScheduleItem = function (increment) {
    const date = new Date();
    date.setDate(increment*3);
    this.name = 'Занятие ' + increment;
    this.date = date.toString();
};

ScheduleItem.prototype.description = description;

let increment = 0;

for(let i = 0; i < 4; i++){
    const j_length = 2 + Math.random() * 4;
    schedule.push([]);
    for(let j = 0; j < j_length; j++){
        increment++;
        const scheduleItem = {};
        schedule[i].push(new ScheduleItem(increment))
    }
}

const init = () => {
    const buttonTemplate = document.getElementById('button-template')
            .content.querySelector('.button-group__button'),
        buttonGroup = document.querySelector('.button-group');
    schedule.forEach(
        (el, key) => {
            const clone = document.importNode(buttonTemplate, true);
            clone.textContent = (key+1) + ' месяц';
            clone.addEventListener('click', (ev) => {
                const scheduleTemplate = document.getElementById('schedule-template')
                    .content.querySelector('.schedule'),
                    scheduleList = document.querySelector('.schedules__list');
                scheduleList.innerHTML = '';
                el.forEach(
                    scheduleEl => {
                        document.querySelectorAll('.button-group__button').forEach(button => {
                            button.classList.remove('button-group__button--active');
                        });
                        clone.classList.add('button-group__button--active');
                        const sheduleClone = document.importNode(scheduleTemplate, true);
                        sheduleClone.querySelector('.schedule__title').innerText = scheduleEl.name;
                        sheduleClone.querySelector('.schedule__description').innerText = scheduleEl.description;
                        sheduleClone.querySelector('.schedule__date').innerText = scheduleEl.date;
                        scheduleList.appendChild(sheduleClone);
                    }
                )
            });
            buttonGroup.appendChild(clone);
        }
    );
};

window.onload = init;