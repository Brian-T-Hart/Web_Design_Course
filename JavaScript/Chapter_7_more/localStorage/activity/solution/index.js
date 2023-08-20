/** 
 * Create a button that when clicked
 * - Increments the clickCount
 * - Updates the value in localStorage
 * - Displays the clickCount on the screen
 */

// Get reference to click-count element
const clickCountEl = document.getElementById('click-count');

// Set the innerText to the value of clickCount
clickCountEl.innerText = getClickCount();

// Get reference to the button
const clickMe = document.getElementById('click-me');

// Add click listener
clickMe.addEventListener('click', function() {

    let clickCount = getClickCount();
    
    // increment the count and save new value to localStorage
    localStorage.setItem('clickCount', ++clickCount);

    // update the innerText of click-count element
    clickCountEl.innerText = clickCount;
});


function getClickCount() {
    let clickCount = localStorage.getItem('clickCount');
    
    if (clickCount == null) {
        clickCount = 0;
    }

    return clickCount;
}