import { mount } from '@vue/test-utils'
import { test, expect, describe } from 'vitest'
import { TheFooter } from '#components'

describe('TheHeader.vue', () => {
  test('Display the correct copyright text', () => {
    const copyrightText = '2024-PRESENT © H. Ngọc Minh'

    const wrapper = mount(TheFooter)

    expect(wrapper.find('p > span').text())
      .toBe(copyrightText)
    expect(wrapper.findComponent({ name: 'NuxtLink' }).text())
      .toBe('CC BY-SA 4.0')
  })
})
