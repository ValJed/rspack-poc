import { utilFunc } from '@/utils'

const url = new URL('/heere/tavu')

console.log('url', url)

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container')
    container.innerHTML = 'Salut les cul lol'
    utilFunc()
})
