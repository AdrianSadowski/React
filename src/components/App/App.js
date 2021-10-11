import React from 'react';
import List from '../List/ListContainer';
import styles from './App.scss';
import PropTypes from 'prop-types';
import Search from '../Search/Search';


class App extends React.Component {
  render() {
    const { title, subtitle, lists} = this.props;

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    searchString: PropTypes.string,
  }
}

export default App;
