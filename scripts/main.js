// Script to disable Facebook from serving up notifications

renameTitle();
wipeNotifications();


// target node to check for notifications
const notificationNode = document.getElementsByClassName("rq0escxv l9j0dhe7 du4w35lb")[0];
const othersNode = document.getElementsByClassName("pmk7jnqg h5g66v2i nezaghv5")[0];

// Options for observers
const config = { attributes: true, childList: true, subtree: true };

// Notifications Modifier
const notificationCallback = function(mutationsList, observer){
  renameTitle();
  wipeNotifications();
};

// Notifications Modifier
const notificationObserver = new MutationObserver(notificationCallback);
notificationObserver.observe(notificationNode, config)


// Others Modifier
const othersCallback = function(mutationsList, observer){
  wipeOthers();
};

// Others Modifier
const othersObserver = new MutationObserver(othersCallback);
othersObserver.observe(notificationNode, config)

