/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>


  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(array){

  //create div.menu
  const menu= document.createElement('div');
  menu.classList.add('menu'); //add menu class
  const unorderedList= document.createElement('ul');//create UL
  
  //append ul to div.menu
  menu.appendChild(unorderedList);

  //add data in li's and append to ul
  array.forEach( ele => {
    let curListItem= document.createElement('li');//create li elements
    curListItem.textContent= ele; //assign textContent from array
    unorderedList.appendChild(curListItem); //add li to ul
  } );//end foreach

  //grab the menu button element
  const menuButton= document.querySelector('.menu-button');

  // click event
  menuButton.addEventListener('click', (event) => {
    menu.classList.toggle('menu--open'); //toggle class
    if( menu.classList.contains('menu--open') ){
      //gsap stretch
      gsap.to( menu,{ duration: 1, width: '350px' } );

    }//end if
  });//end event

  //body click event to close the menu
  const except= document.querySelector('body');
  except.addEventListener('click', (event) => {
    if( event.target != menu && menu.classList.contains('menu--open')){
      
      //gsap stretch
      gsap.to( menu,{ duration: 1, width: '0px' } );
    }//end if
  });//end event

  return menu;
}//end func

//grab header div
const header= document.querySelector('.header');

  // add to DOM
header.prepend(createMenu(menuItems));



