describe('App de Alarma en Android', () => {
  
  it('Editar día de la nueva alarma', async () => {
    const alarmTab = await $('id=com.google.android.deskclock:id/navigation_bar_item_icon_container')
    await alarmTab.click()

    const addbutton = await $('~Add alarm')
    await addbutton.click()

    const hour = await $('android=new UiSelector().text("11")')
    await hour.click()
    const minute = await $('android=new UiSelector().text("30")')
    await minute.click()
    const okBtn = await $('id=com.google.android.deskclock:id/material_timepicker_ok_button')
    await okBtn.click()

    const newAlarm = await $('android=new UiSelector().resourceId("com.google.android.deskclock:id/alarm_card_layout").instance(2)')
    await newAlarm.click()

    const scheduleBtn = await $('id=com.google.android.deskclock:id/schedule_alarm_action')
    await scheduleBtn.click()

    const day = await $('android=new UiSelector().text("30")')
    await day.click()

    const okBtn2 = await $('id=com.google.android.deskclock:id/confirm_button')
    await okBtn2.click()

    const saveBtn = await $('id=com.google.android.deskclock:id/save_button')
    await saveBtn.click()

    const scheduleLabel = await $('android=new UiSelector().textContains("Scheduled for September 30")')
    await expect(scheduleLabel).toBeDisplayed()
  });

  it('Cancelar programación', async () => {
    const alarm = await $('android=new UiSelector().resourceId("com.google.android.deskclock:id/alarm_card_layout").instance(2)')
    await alarm.click()

    const cancel = await $('id=com.google.android.deskclock:id/schedule_alarm_action')
    await cancel.click()

    const saveBtn = await $('id=com.google.android.deskclock:id/save_button')
    await saveBtn.click()

    const todayLabel = await $('android=new UiSelector().textContains("Today")')
    await expect(todayLabel).toBeDisplayed()
  })
});