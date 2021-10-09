import PropTypes from 'prop-types';
import React from 'react';
import { settings } from '../../data/dataStore';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import styles from './Column.scss';

// zaginione cards ???????
class Column extends React.Component {
  render() {
    const {title, icon, cards, addCard} = this.props;
    
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}><Icon name={icon} /></span>
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key ={cardData.id} {...cardData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.node,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  };
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
}

export default Column;