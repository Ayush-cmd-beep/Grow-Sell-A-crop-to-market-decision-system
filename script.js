const modal=document.getElementById('modal'),title=document.getElementById('modalTitle'),text=document.getElementById('modalText'),extra=document.getElementById('modalExtra'),toast=document.getElementById('toast');
function openModal(t,msg,html=''){title.textContent=t;text.textContent=msg;extra.innerHTML=html;modal.classList.add('show')}
function closeModal(){modal.classList.remove('show')}
document.getElementById('closeModal').onclick=closeModal;modal.onclick=e=>{if(e.target===modal)closeModal()};
function notify(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2600)}
document.getElementById('heroStart').onclick=()=>document.getElementById('how').scrollIntoView({behavior:'smooth'});
document.getElementById('getStartedBtn').onclick=()=>document.getElementById('how').scrollIntoView({behavior:'smooth'});
document.getElementById('decisionBtn').onclick=()=>document.getElementById('marketplace').scrollIntoView({behavior:'smooth'});
document.querySelectorAll('.step-action').forEach(b=>b.onclick=()=>{const a=b.dataset.action;const data={profile:['Farm Profile','Enter your crop, quantity, location and expected harvest date.'],market:['Market Analysis','We compare nearby mandi prices, distance, transport cost and demand.'],recommendation:['Smart Recommendation','Gro&Sell highlights the option with the strongest expected return.']}[a];openModal(data[0],data[1],'<button class="dark-btn" onclick="document.getElementById(\\'closeModal\\').click()">Continue</button>')});
document.querySelectorAll('.market-option').forEach(b=>b.onclick=()=>openModal(b.dataset.mandi,'Market details can be expanded here. The final recommendation considers distance, transport cost and demand—not just price.'));
document.querySelector('.why-btn').onclick=()=>openModal('Why Mandi B?','Mandi B is recommended because it balances a strong selling price, high demand and lower transport impact, giving the best expected return.');
document.getElementById('findBuyersBtn').onclick=()=>openModal('Verified Buyers','Here you can filter buyers by crop, distance, quantity and offered price.','<p><b>Suggested filters:</b> Wheat • Within 25 km • Verified only</p>');
document.getElementById('howWorksBtn').onclick=()=>document.getElementById('how').scrollIntoView({behavior:'smooth'});
document.querySelectorAll('.buyer-row').forEach(b=>b.onclick=()=>openModal(b.dataset.buyer,'This buyer is verified. You can add a complete profile, ratings, contact request and offer acceptance flow here.'));
document.getElementById('cropSelect').onclick=()=>notify('Crop selector opened — Wheat is currently selected.');
document.getElementById('signInBtn').onclick=()=>openModal('Sign In','Connect this button to your authentication page or login modal.');
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id.length>1){e.preventDefault();document.querySelector(id)?.scrollIntoView({behavior:'smooth'})}}));