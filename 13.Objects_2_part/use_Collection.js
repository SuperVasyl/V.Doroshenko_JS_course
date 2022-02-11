const DB = {
  collection: {
    posts: {
      posts_1: {
        name: 'Post 1',
        text: 'Some text 1',
      },
      posts_2: {
        name: 'Post 2',
        text: 'Some text 2',
      },
    },
    comments: {
      comment_1: {
        postId: 'posts_1',
        text: 'Comment 1',
      },
      comment_2: {
        postId: 'posts_1',
        text: 'Comment 2',
      },
    },
  },
};

function useCollectionInfo(generalTag) {
    const data = DB.collection;
    return function (specificTag) {
        const info = data[generalTag][specificTag];
        console.log(info);
    }
}

const getPostItem = useCollectionInfo('posts');
getPostItem('posts_1');


// https://www.youtube.com/watch?v=r2S0zJVAQZs&list=PLvaxnpPm_Z5LFxlTOETFpWAjxWueMiMb3&index=10&t=2699s
// https://docs.google.com/document/d/1shnEZLFrR57vzeCE_tUkjQpTZsW3yLJW/edit
// http://old.code.mu/tasks/javascript/base/osnovy-yazyka-javascript-dlya-novichkov.html
// http://old.code.mu/tasks/javascript/context/prodvinutaya-rabota-s-kontekstom-v-javascript.html
