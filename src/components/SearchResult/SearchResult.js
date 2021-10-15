import React from 'react';
import Icon from '../Icon/Icon';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

class SearchResult extends React.Component{
  static propTypes = {
    cards: PropTypes.array,
  }

  render() {
    const {cards} = this.props;

    return(
      <section className={styles.component}>
        <h3 className={styles.title}> Search results: 
          <span className={styles.icon}>
            <Icon name='search' />
          </span>
        </h3>
        <div>
          {cards.map(cardsData => (
            <Card key={cardsData.id} {...cardsData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResult;