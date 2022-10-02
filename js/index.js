
const element = document.querySelectorAll('.btn');
const playerList = document.getElementById('player-list');
let flag = 1
const convertElement = Array.from(element);
convertElement.map((data)=>
{
    data.addEventListener('click',(e)=>
    {
        if(flag <=5)
        {
            let name  = document.getElementById(`name-${e.target.id}`);
            const li = document.createElement('li');
            li.innerHTML = name.innerHTML
            playerList.appendChild(li);
            flag = flag + 1
        }
       else 
       {
        alert("You can select only five players");
       }
    })
   
})


document.getElementById('player-calculate').addEventListener('click',(e)=>
{
    const perPlayerCost = Number(document.getElementById('player-cost').value);
    
       
        document.getElementById('total-player-cost').innerText = `    $${perPlayerCost * flag}`;
   
   
})
document.getElementById('total-calculate').addEventListener('click',(e)=>
{
    const perPlayerCost = Number(document.getElementById('player-cost').value);
    const managerCost = Number(document.getElementById('manager-cost').value);
    const coachCost = Number(document.getElementById('coach-cost').value);
    const totalPlayerCost = perPlayerCost * (flag-1);

    const totalCost = managerCost + coachCost + totalPlayerCost;
    document.getElementById('total-cost').innerText = `$${totalCost}`;
})