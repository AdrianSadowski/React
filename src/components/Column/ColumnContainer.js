import { connect } from 'react-redux';
import { getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux';
import Column from './Column';

// export const getCardsForColumn = ({cards}, columnId) =>
//   cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);