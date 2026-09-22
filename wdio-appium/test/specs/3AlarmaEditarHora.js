describe('App de Alarma en Android', () => {
  
  it('Editar hora de alarma', async () => {
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

    const editBtn = await $('id=com.google.android.deskclock:id/clock_edit_button')
    await editBtn.click()

    const newHour = await $('android=new UiSelector().text("12")')
    await newHour.click()
    const newMinute = await $('android=new UiSelector().text("00")')
    await newMinute.click()
    const okBtn2 = await $('id=com.google.android.deskclock:id/material_timepicker_ok_button')
    await okBtn2.click()

    const saveBtn = await $('id=com.google.android.deskclock:id/save_button')
    await saveBtn.click()

    const alarmaEdited = await $('android=new UiSelector().textContains("12:00")')
    await expect(alarmaEdited).toBeDisplayed()
  });
});