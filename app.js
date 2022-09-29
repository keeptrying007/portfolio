
console.log('this first message')

const arthritis = document.querySelector('#arthritis')
arthritis.addEventListener('click', () =>{
    document.querySelector('.arthritis-text').classList.toggle("hidden")   
})

const neck = document.querySelector('#neck')
neck.addEventListener('click', () =>{
    document.querySelector('.neck-text').classList.toggle("hidden")   
})


const back = document.querySelector('#back')
back.addEventListener('click', () =>{
    document.querySelector('.back-text').classList.toggle("hidden")   
})

const headache = document.querySelector('#headache')
headache.addEventListener('click', () =>{
    document.querySelector('.headache-text').classList.toggle("hidden")   
})


const sports = document.querySelector('#sports')
sports.addEventListener('click', () =>{
    document.querySelector('.sports-text').classList.toggle("hidden")   
})

const work = document.querySelector('#work')
work.addEventListener('click', () =>{
    document.querySelector('.work-text').classList.toggle("hidden")   
})


const repetitive = document.querySelector('#repetitive')
repetitive.addEventListener('click', () =>{
    document.querySelector('.repetitive-text').classList.toggle("hidden")   
})

const auto = document.querySelector('#auto')
auto.addEventListener('click', () =>{
    document.querySelector('.auto-text').classList.toggle("hidden")   
})


const stress = document.querySelector('#stress')
stress.addEventListener('click', () =>{
    document.querySelector('.stress-text').classList.toggle("hidden")   
})

document.getElementById('menu-1').addEventListener('click', () => {
    document.getElementById('big-menu').classList.add('toggle-open');
  });
  
  document.getElementById('big-menu-close').addEventListener('click', () => {
    document.getElementById('big-menu').classList.remove('toggle-open');
  });