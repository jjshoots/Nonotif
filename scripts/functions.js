function renameTitle(){
    // disable title from being renamed
    pageTitle = "Facebook";
    if (document.title != pageTitle) {
    document.title = pageTitle;
    };
}

function wipeNotifications(){
    // get rid of notifications
    var NotifObject = document.getElementsByClassName("s45kfl79 emlxlaya bkmhp75w spb7xbtv pq6dq46d e9vueds3 ekzkrbhg omvj5yrc jiuqdcnw d82f96u3 gky8063y");// disable notification in title
    
    if(NotifObject.length > 0){
        NotifObject[0].remove();
    }
}