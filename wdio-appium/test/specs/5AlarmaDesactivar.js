describe('App de Alarma en Android', () => {
  
  it('Desactivar nueva alarma', async () => {
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

    await browser.pause(2000)
    const desactivateBtn = await $('android=new UiSelector().description("11:30 AM alarm")')
    await desactivateBtn.waitForDisplayed({ timeout: 10000 })
    await desactivateBtn.click()

    const notScheduled = await $('android=new UiSelector().textContains("Not scheduled")')
    await expect(notScheduled).toBeDisplayed()
  });
});