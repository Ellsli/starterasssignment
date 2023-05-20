const pageSize = 10;
const ul_list = document.getElementById('userslist');
const total = document.getElementById('total');

total.innerHTML += users.length;

function getdata(pagedataset = []) {
  ul_list.innerHTML = '';

  for (i = 0; i < pagedataset.length; i++) {
    ul_list.innerHTML += `
    <li class="contact-item cf">
        <div class="contact-details">
            <img class="avatar" src=${pagedataset[i].image}>
            <h3>${pagedataset[i].name
      }</h3>
            <span class="email">${pagedataset[i].name.replace(' ', '.')}@example.com</span>
        </div>
        <div class="joined-details">
               <span class="date">Joined ${pagedataset[i].joined}</span>
       </div>
    </li>

  ` }
}
function calculatePages() {
  const numPages = Math.ceil(users.length / pageSize);
  const pageLink = document.getElementById('pagination');
  for (i = 1; i <= numPages; i++) {
    pageLink.innerHTML += `<li><a class="links" onclick="relaventpagedata(${i},this)">${i}</a></li>`
  }
}
function removing(){
const links= document.getElementsByClassName('links');
for(i=0;i<links.length;i++ ){
 
    links[i].classList.remove('active')
  }


console.log(links)
}

relaventpagedata(1);
calculatePages();
function relaventpagedata(pagenumber, element) {
  removing();

  if (element)
    element.classList.add('active');

  let start = (pagenumber * pageSize) - pageSize;
  let end = pagenumber * pageSize;
  const user = users.slice(start, end);
  getdata(user)
}



