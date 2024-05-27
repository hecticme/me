import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { TheHeader } from '#components'

test('It renders', () => {
  const wrapper = mount(TheHeader)

  expect(wrapper.classes())
    .toContain('sticky')
})
