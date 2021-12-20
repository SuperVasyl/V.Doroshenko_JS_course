const DB = {
    collection: {
        posts: {
            posts_1: {
                name: 'Post 1',
                text: 'Some text 1'
            },
            posts_2: {
                name: 'Post 2',
                text: 'Some text 2'
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

