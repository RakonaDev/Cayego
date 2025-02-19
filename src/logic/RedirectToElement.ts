export default function RedirectToElement (id: string) {
  const $element = document.getElementById(id)
  $element?.scrollIntoView({
    block: 'nearest',
    behavior: 'smooth'
  })
}