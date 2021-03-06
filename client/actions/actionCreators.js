export{
  increment,
  addComment,
  removeComment,
}

function increment(index){
  return {
    type:'INCREMENT_LIKES',
    index,
  }
}

function addComment(postId,author,comment){
  return {
    type:'ADD_COMMENT',
    postId,
    author,
    comment,
  }
}

function removeComment(postId,i){
  return {
    type:'REMOVE_COMMENT',
    i,
    postId,
  }
}