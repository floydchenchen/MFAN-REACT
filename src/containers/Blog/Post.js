import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

const headerHeight = 64;
const footerHeight = 50;
const contentStyle = {
  minHeight: `calc(100vh - ${headerHeight + footerHeight}px)`,
};
const paperStyle = { padding: 16 };

export default class Post extends PureComponent {
  static propTypes = {
    fetchPost: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    post: PropTypes.shape({
      content: PropTypes.string,
      date: PropTypes.instanceOf(Date),
      title: PropTypes.string,
    }),
    slug: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { fetchPost, id, post, slug } = this.props;
    if (!post) {
      fetchPost(id, slug);
    }
  }

  _renderProgress = () => {
    return (
      <div style={{ ...paperStyle, textAlign: 'center' }}>
        <br />
        <CircularProgress size={80} thickness={6} />
      </div>
    );
  };

  _handleClick = () => {
    const { history: { goBack, length, push } } = this.props;
    /* history.length: the number of elements in the session history, including the currently loaded page.
    For example, a new tab returns 1, a new page loaded normally returns 2 */
    length < 4 ? push('/') : goBack();
  };

  _renderPost = () => {
    const { title, date, content } = this.props.post;
    return (
      <Paper zDepth={0} style={paperStyle}>
        <IconButton onClick={this._handleClick}>
          <ArrowBack />
        </IconButton>
        <article>
          <h1>{title}</h1>
          <time dateTime={date}>{moment(date).fromNow()}</time>
          <br />
          <br />
          <Divider />
          {content && content
            .split('\n')
            .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </article>
      </Paper>
    );
  };

  render() {
    return (
      <div>
        <div style={contentStyle}>
          {this.props.post ? this._renderPost() : this._renderProgress()}
        </div>
        <Divider />
      </div>
    );
  }
}
