'use strict';

app
  .factory('Post', function ($resource) {

    return $resource('https://con-quest.firebaseIO.com/posts/:id.json');
      
  });
