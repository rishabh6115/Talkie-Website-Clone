const f_button = document.querySelector('#design')
const s_button = document.querySelector('#product')
const t_button = document.querySelector('#leadership')
const pic = document.querySelector('.changing-pic')
const head = document.querySelector('#change-heading')
const para = document.querySelector('#change-para')
const header = document.querySelector('.small-device')
const nav = document.querySelector('.nav-bar')
const small_content = document.querySelectorAll('.small-content')
const header_symbol = document.querySelector('.tle')
const faq_symbol = document.querySelectorAll('.fa-times-circle')
const ans = document.querySelectorAll('.ans')





f_button.addEventListener('click', () => {
    pic.setAttribute('src', 'pictures/Capture6.PNG')
    head.innerText = "Design Teams"
    para.innerHTML = '<span class="spc">Quick Brainstorming hurdles ? </span> Start a conversation with teammates in one click  and use screen sharing to bring them up to speed. If you can’t connect in real-time.'

})



s_button.addEventListener('click', () => {
    pic.setAttribute('src', 'pictures/Capture7.PNG')
    head.innerText = "Product Teams"
    para.innerHTML = '<span class="spc">When you’re mapping out roadmap priorities </span> ,the last thing you need are video feeds taking up your entire screen. Kick off a voice chat with stakeholders, share your screen, and enjoy Talkie’s lightweight audio bubbles as a sticky overlay as you focus on the task at hand – planning.'
})


t_button.addEventListener('click', () => {
    pic.setAttribute('src', 'pictures/Capture8.PNG')
    head.innerText = "Leadership Teams"
    para.innerHTML = '<span class="spc">Culture and trust</span> is all about communicating the company vision clearly and getting teams aligned. Founders & managers Join daily standups & all-hands updates and blast it out to the team or check in quickly and stay in touch with folks across the board.'

})

header.addEventListener('click', () => {

    nav.classList.toggle('height');
    for (let s of small_content) {
        s.classList.toggle('dis')
    }
})

faq_symbol[0].addEventListener('click', () => {
    ans[0].classList.toggle('db')
})
faq_symbol[1].addEventListener('click', () => {
    ans[1].classList.toggle('db')
})
faq_symbol[2].addEventListener('click', () => {
    ans[2].classList.toggle('db')
})
faq_symbol[3].addEventListener('click', () => {
    ans[3].classList.toggle('db')
})