import { When, Then } from '@wdio/cucumber-framework'
import AlarmPage from '../../pageObjects/alarmPage.js'
const assert = require('assert');

When('Configuro la repetición de la alarma para el día número {string}', async (dayNumber) => {
    await AlarmPage.setRepeatDay(dayNumber);
});

When('Edito el nombre de la alarma a {string}', async (name) => {
    await AlarmPage.editAlarmName(name);
});

When('Edito la hora de la alarma a las {string} horas y {string} minutos', async (hour, minute) => {
    await AlarmPage.editAlarmTime(hour, minute);
});

When('Programo la alarma para el día {string} del calendario', async (day) => {
    await AlarmPage.scheduleAlarmDate(day);
});

When('Cancelo la programación de la alarma', async () => {
    await AlarmPage.cancelScheduleDate();
});

When('Desactivo la alarma con descripción {string}', async (description) => {
    await AlarmPage.deactivateAlarm(description);
});

Then('El texto {string} debería estar visible en la pantalla', async (text) => {
    const visible = await AlarmPage.isTextDisplayed(text);
    assert.strictEqual(visible, true, `El texto "${text}" no está visible en la pantalla`);
});
