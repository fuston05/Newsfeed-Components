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
    event.stopPropagation;
    menu.classList.toggle('menu--open'); //toggle class
    const menuList= document.querySelector('.menu ul');

    //if menu is currently closed then we can open it
    if( menu.classList.contains('menu--open') ){
      //gsap stretch
      gsap.to( menu,{ duration: 1, width: '350px', onComplete: closeEvent} );
      gsap.to( menuList,{ duration: 1, opacity: '1'} );
      
    }//end if
  });//end event

  //body click event to close the menu
  function closeEvent(){

    const except= document.querySelector('body');
    const menuList= document.querySelector('.menu ul');
    const listItem= document.querySelector('li');

    except.addEventListener('click', function e(event){

      //if menu is currently open then we can close it
    if( event.target !== menu &&  //if we click on anything BESIDES the menu/menu items it will close
      event.target !== listItem && 
      event.target !== menuList &&
      menu.classList.contains('menu--open')){
      //gsap stretch
      gsap.to( menu,{ duration: 1, width: '0px', onComplete: classToggle } );
      gsap.to( menuList,{ duration: 0.5, opacity: 0} );

      function classToggle(){
        menu.classList.toggle('menu--open'); //toggle class
      }//end fun

      //remove event listener or the menu will not a second time
      except.removeEventListener('click', e);
    
    }//end if
  });//end event
  }//end closeEvent
  
  return menu;
}//end func

//grab header div
const header= document.querySelector('.header');

// add to DOM
header.prepend(createMenu(menuItems));



