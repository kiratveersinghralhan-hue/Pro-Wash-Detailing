
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('active')})
});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('[data-count]').forEach(el=>{
let target=+el.dataset.count,c=0;
let i=setInterval(()=>{
c+=Math.ceil(target/60);
if(c>=target){c=target;clearInterval(i)}
el.textContent=c+'+';
},25);
});
