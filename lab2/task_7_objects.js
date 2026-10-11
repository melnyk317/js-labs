'use strict';

const fn = () => {
    const human_1 = { name: 'Anna' };
    let human_2 = { name: 'Sofia' };

    human_1.name = 'Olena';
    human_2.name = 'Maria';

    /* human_1 = {name: 'Diana'};
    const забороняє переприсвоєння */
    human_2 = {name: 'Iryna'};

    console.log(human_1);
    console.log(human_2);
};
