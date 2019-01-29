export function changeInput(value) {
  return {
    type: 'change_input',
    value: value,
  }
}

export function changeButton(value) {

  return {
    type: 'change_button',
    value: value
  }
}

export function changeImg(value) {
  return {
    type: 'change_img',
    value: value
  }
}
export function changeRevise(value,i) {
  return {
    type: 'change_revise',
    value: value,
    index:i
  }
}
