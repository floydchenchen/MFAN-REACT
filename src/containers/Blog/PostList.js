import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Waypoint from 'react-waypoint';
import moment from 'moment';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export const TRUNCATION_LIMIT = 150;

const truncate = (text, limit) => {
  if (typeof text !== 'string') return '';

  if (text.length > limit) {
    // truncate string based on limit
    text = text.substring(0, limit);
  }

  // truncate to last whitespace if applicable
  const lastSpaceIndex = text.lastIndexOf(' ');
  if (lastSpaceIndex !== -1) {
    text = text.substring(0, lastSpaceIndex);
  }

  // trim trailing whitespace/periods
  return text.replace(/[\s.]+$/g, '');
};

export default class PostList extends PureComponent {
  static propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.instanceOf(Date),
        id: PropTypes.string,
        slug: PropTypes.string,
        summary: PropTypes.string,
        title: PropTypes.string,
      })
    ),
  };

  render() {
    const { fetchPosts, isLoading, posts } = this.props;

    return (
      <div>
        {/* posts */}
        {posts.map(({ id, title, summary, date, slug }, index) => (
          <List key={index}>
            <Link
              to={`/posts/${id}/${slug}`}
              style={{ textDecoration: 'none', color: "black"}}
            >
              <ListItem>
                <article style={{ lineHeight: 1.35 }}>
                  <h2>
                    <strong>{title}</strong>
                  </h2>
                  <p>{truncate(summary, TRUNCATION_LIMIT)}&hellip;</p>
                  <div style={{ textAlign: 'right' }}>
                    <time dateTime={date}>{moment(date).fromNow()}</time>
                  </div>
                </article>
              </ListItem>
            </Link>
            <Divider />
          </List>
        ))}

        {/* waypoint: lazy loading */}
        {!isLoading && <Waypoint onEnter={fetchPosts} />}
        <br />
        <br />

        {/* progress */}
        <div style={{ textAlign: 'center' }}>
          <CircularProgress size={80} thickness={6} />
        </div>
        <br />
      </div>
    );
  }
}
