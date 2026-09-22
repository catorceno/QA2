describe('App de Alarma en Android', () => {
  
  it('Editar nombre de nueva alarma', async () => {
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

    const nameBtn = await $('id=com.google.android.deskclock:id/alarm_label')
    await nameBtn.click()

    const nameInput = await $('id=com.google.android.deskclock:id/alarm_label_edit')
    await nameInput.clearValue()
    await nameInput.setValue('New Name')

    const saveBtn = await $('id=com.google.android.deskclock:id/save_button')
    await saveBtn.click()

    const nameLabel = await $('android=new UiSelector().textContains("New Name")')
    await expect(nameLabel).toBeDisplayed()
  });
});