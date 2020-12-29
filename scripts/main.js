// Script to disable Facebook from serving up notifications

renameTitle();
wipeNotifications();


// target node to check for notifications
const targetNode = document.getElementsByClassName("rq0escxv l9j0dhe7 du4w35lb")[0];

// Options for observer
const config = { attributes: true, childList: true, subtree: true };

// const callback function
const callback = function(mutationsList, observer){
  renameTitle();
  wipeNotifications();
};

// observer instance
const observer = new MutationObserver(callback);
observer.observe(targetNode, config)