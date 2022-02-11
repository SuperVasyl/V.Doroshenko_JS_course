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

console.log(DB);

//function which takes object by properties
function useCollection(generalTag) {
  const data = DB.collection;
  return function (specificTag) {
    const info = data[generalTag][specificTag];
    console.log(info);
  };
}
const getPostItem = useCollection('posts');
getPostItem('posts_1');

// Methods in  DB

//.get
DB.get = function (mainTag, tag) {
  const additionalInfo = DB.collection[mainTag][tag];
  const name = additionalInfo['name'];
  const text = additionalInfo['text'];
  console.log(`
    I get this object info:
    id: ${tag},
    name: ${name},
    text: ${text}
    `);
};

DB.get('posts', 'posts_1');

//.deleteOne
DB.deleteOne = function (bigTag, tagForDelete) {
  delete DB.collection[bigTag][tagForDelete];
};

DB.deleteOne('comments', 'comment_1');

//.create
DB.create = function (directory, newObject) {
  DB.collection[directory][newObject] = {
    name: 'some text',
    text: 'also some text',
  };
};

DB.create('posts', 'posts_3');

//.edit
DB.edit = function (firstMainTag, lastMainTag, tag, changes) {
  DB.collection[firstMainTag][lastMainTag][tag] = changes;
};

DB.edit('posts', 'posts_1', 'name', 'New weird name');
