class AlarmPage {
  
  // 🔹 Selectores
  get alarmTab() { return $('id=com.google.android.deskclock:id/navigation_bar_item_icon_container'); }
  get addButton() { return $('~Add alarm'); }
  get okBtn() { return $('id=com.google.android.deskclock:id/material_timepicker_ok_button'); }
  get cancelBtn() { return $('id=com.google.android.deskclock:id/material_timepicker_cancel_button'); }
 // get deleteBtn() { return $('android=new UiSelector().resourceId("com.google.android.deskclock:id/delete'); }
  // Selector dinámico para la hora/minuto
  hourElement(hour) { 
    return $(`android=new UiSelector().text("${hour}")`);
  }

  minuteElement(minute) { 
    return $(`android=new UiSelector().text("${minute}")`);
  }

  alarmWithTime(time) {
    return $(`android=new UiSelector().textContains("${time}")`);
  }

  expandAlarm(position) {
    return $(`(//android.view.View[@resource-id="com.google.android.deskclock:id/clock_switch_flow"])[${position}]`);
  }

  deleteBtn() {
    return $('android=new UiSelector().resourceId("com.google.android.deskclock:id/delete_button")');
  }

  minuteBtn() {
    return $('id=com.google.android.deskclock:id/material_minute_tv')
  }
  // 🔹 Métodos de acción
  async openAlarmTab() {
    await this.alarmTab.waitForDisplayed({ timeout: 5000 });
    await this.alarmTab.click();
  }

  async createAlarm(hour, minute) {
    await this.addButton.waitForDisplayed({ timeout: 5000 });
    await this.addButton.click();

    await this.hourElement(hour).click();
    await this.minuteElement(minute).click();
    await browser.takeScreenshot();

    await this.okBtn.click();
  }

  async isAlarmDisplayed(time) {
    const alarm = this.alarmWithTime(time);
    await alarm.waitForDisplayed({ timeout: 5000 });
    return alarm.isDisplayed();
  }

  async cancelAlarm(hour, minute) {
    await this.addButton.waitForDisplayed({ timeout: 5000 });
    await this.addButton.click();
    await this.hourElement(hour).click();
    await this.minuteBtn().click();
    await this.minuteElement(minute).click();


    await this.cancelBtn.click();
  }

  async deleteAlarm(time,position) {
    const alarm = await this.alarmWithTime(time);
    await expect(alarm).toBeDisplayed();

    const expand = await this.expandAlarm(position);
    if (await expand.isDisplayed()) {
        await expand.click();
        await driver.pause(5000);
    }

    const delBtn = await this.deleteBtn();
    await driver.pause(5000);
    await delBtn.waitForDisplayed({ timeout: 5000 });
    await delBtn.click();
  }

  alarmCard(instance) {
    return $(`android=new UiSelector().resourceId("com.google.android.deskclock:id/alarm_card_layout").instance(${instance})`);
  }

  saveButton() { return $('id=com.google.android.deskclock:id/save_button'); }
  dayButton(dayNumber) { return $(`id=com.google.android.deskclock:id/day_button_${dayNumber}`); }
  alarmLabelBtn() { return $('id=com.google.android.deskclock:id/alarm_label'); }
  alarmLabelEdit() { return $('id=com.google.android.deskclock:id/alarm_label_edit'); }
  clockEditButton() { return $('id=com.google.android.deskclock:id/clock_edit_button'); }
  scheduleAlarmAction() { return $('id=com.google.android.deskclock:id/schedule_alarm_action'); }
  confirmButton() { return $('id=com.google.android.deskclock:id/confirm_button'); }
  dateElement(day) { return $(`android=new UiSelector().text("${day}")`); }
  alarmToggle(description) { return $(`android=new UiSelector().description("${description}")`); }
  textElement(text) { return $(`android=new UiSelector().textContains("${text}")`); }

  async openAlarmCard(instance = 2) {
    const card = this.alarmCard(instance);
    await card.waitForDisplayed({ timeout: 15000 });
    await card.click();
  }

  // 1) Configurar repetición semanal de una alarma
  async setRepeatDay(dayNumber, instance = 2) {
    await this.openAlarmCard(instance);
    await this.dayButton(dayNumber).click();
    await browser.takeScreenshot();
    await this.saveButton().click();
  }

  // 2) Editar el nombre/etiqueta de una alarma
  async editAlarmName(name, instance = 2) {
    await this.openAlarmCard(instance);
    await this.alarmLabelBtn().click();

    const input = this.alarmLabelEdit();
    await input.clearValue();
    await input.setValue(name);

    await this.saveButton().click();
  }

  // 3) Editar la hora de una alarma existente
  async editAlarmTime(hour, minute, instance = 2) {
    await this.openAlarmCard(instance);
    await this.clockEditButton().click();

    await this.hourElement(hour).click();
    await this.minuteElement(minute).click();
    await this.okBtn.click();

    await this.saveButton().click();
  }

  // 4) Programar una alarma para una fecha específica del calendario
  async scheduleAlarmDate(day, instance = 2) {
    await this.openAlarmCard(instance);
    await this.scheduleAlarmAction().click();
    await this.dateElement(day).click();
    await this.confirmButton().click();
    await this.saveButton().click();
  }

  // 4b) Cancelar la programación de fecha (vuelve a "Today")
  async cancelScheduleDate(instance = 2) {
    await this.openAlarmCard(instance);
    await this.scheduleAlarmAction().click();
    await this.saveButton().click();
  }

  // 5) Desactivar una alarma usando su switch/description
  async deactivateAlarm(description) {
    const toggle = this.alarmToggle(description);
    await toggle.waitForDisplayed({ timeout: 10000 });
    await toggle.click();
  }

  // Assert genérico reutilizable para los nuevos escenarios
  async isTextDisplayed(text) {
    const el = this.textElement(text);
    await el.waitForDisplayed({ timeout: 10000 });
    return el.isDisplayed();
  }
}

module.exports = new AlarmPage();