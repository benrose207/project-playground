import React from 'react';

const ArrayCardio2 = () => {
  const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  const hasAdults = people.some(person => (new Date().getFullYear() - person.year) >= 19);

  const allAdults = people.every(person => (new Date().getFullYear() - person.year) >= 19);

  const findComment = (commentId) => {
    return comments.find(comment => comment.id === commentId);
  };

  const findCommentIdx = (commentId) => {
    return comments.findIndex(comment => comment.id === commentId);
  };

  const deleteComment = (commentId) => {
    const idx = findCommentIdx(commentId);
    return [...comments.slice(0, idx), ...comments.slice(idx + 1)];
  }

  return (
    <div className="content-container">
      <h1>Psst: have a look at the JavaScript Console</h1>

      {/* // Some and Every Checks */}
      {console.log("1. Is at least one person 19 or older?")}
      {console.log({hasAdults})}
      {console.log("2. Is everyone 19 or older?")}
      {console.log({allAdults})}

      {/* // Array.prototype.find() */}
      {/* Find is like filter, but instead returns just the one you are looking for */}
      {console.log("3. find the comment with the ID of 823423")}
      {console.log(findComment(823423))}

      {/* // Array.prototype.findIndex() */}
      {console.log("5. Find the comment with this ID")}
      {console.log(findCommentIdx(823423))}
      {console.log("6. delete the comment with the ID of 823423")}
      {console.table(deleteComment(823423))}
    </div>
  );
};

export default ArrayCardio2;
