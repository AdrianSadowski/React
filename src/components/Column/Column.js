import PropTypes from 'prop-types';
import React from 'react';
import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import styles from './Column.scss';


class Column extends React.Component {
  render() {
    const {title, icon, cards} = this.props;
    
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
        {/* <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div> */}
      </section>
    );
  }
  static propTypes = {
    title: PropTypes.node,
    icon: PropTypes.string,
    cards: PropTypes.array,
  };
}

export default Column;