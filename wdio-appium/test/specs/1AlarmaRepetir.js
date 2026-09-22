describe('App de Alarma en Android', () => {
  
  it('Nueva alarma con repetición día lunes', async () => {
    const alarmTab = await $('id=com.google.android.deskclock:id/navigation_bar_item_icon_container')
    await alarmTab.click()

    const addbutton = await $('~Add alarm')
    await addbutton.click()

    const hour = await $('android=new UiSelector().text("11")')
    const minute = await $('android=new UiSelector().text("30")')
    await hour.click()
    await minute.click()

    const okBtn = await $('id=com.google.android.deskclock:id/material_timepicker_ok_button')
    await okBtn.click()

    const newAlarm = await $('android=new UiSelector().resourceId("com.google.android.deskclock:id/alarm_card_layout").instance(2)')
    await newAlarm.click()

    const mondayBtn = await $('id=com.google.android.deskclock:id/day_button_1')
    await mondayBtn.click()

    const saveBtn = await $('id=com.google.android.deskclock:id/save_button')
    await saveBtn.click()

    const mondayLabel = await $('android=new UiSelector().textContains("Monday")')
    await expect(mondayLabel).toBeDisplayed()
  });
});