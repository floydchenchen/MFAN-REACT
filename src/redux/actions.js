import faker from 'faker';

const capitalize = string => {
  if (!string) return string;
  return string[0].toUpperCase() + string.slice(1);
};

const capitalizeWords = words => {
  const wordsArray = words.split(' ');

  // single word
  if (wordsArray.length === 1) {
    return capitalize(words);
  }

  // multiple words
  return wordsArray.reduce((accumulatedWords, word) => {
    // first word
    if (!accumulatedWords) return capitalize(word);

    // empty array item
    if (!word) return accumulatedWords;

    // concatenate word
    return `${accumulatedWords} ${capitalize(word)}`;
  }, '');
};


const {
  date: { past, recent },
  lorem: { paragraph, paragraphs, slug, words },
  random: { uuid },
} = faker;

// action constants
export const FETCH_POSTS = 'FETCH_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

// generate a list of recent dates sorted in ascending order
const recentDates = Array(50)
  .fill()
  .map(() => recent())
  .sort((date1, date2) => {
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
  });

/**
 * Receives posts (mocked by faker).
 *
 * @param {Number} [count=1]
 * @param {Object} [options]
 */

// options: a pattern to optionally pass in slug and/or id
export const receivePosts = (count = 1, options = {}) => {
  const posts = Array(count)
    .fill()
    .map(() => {
      const summary = paragraph();
      return {
        id: options.id || uuid().split('-')[0],
        title: capitalizeWords(words()),
        summary,
        content: `${summary}\n${paragraphs()}`,
        date: recentDates.pop() || past(),
        slug: options.slug || slug(),
      };
    });

  return {
    type: RECEIVE_POSTS,
    posts,
  };
};

const POST_COUNT = 10;

/**
 * Fetches 10 posts.
 */
export const fetchPosts = () => {
  return dispatch => {
    // emulate api request
    setTimeout(() => dispatch(receivePosts(POST_COUNT)), 1000);
  };
};

/**
 * Fetches post.
 *
 * @param {String} id
 * @param {String} slug
 */
export const fetchPost = (id, slug) => {
  return dispatch => {
    // emulate api request
    setTimeout(() => dispatch(receivePosts(1, { id, slug })), 1000);
  };
};
