import { connect } from 'react-redux';
import { getCardsForSearchResults } from '../../redux/cardsRedux';
import SearchResult from './SearchResult';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearchResults(state, props.match.params.id),
});

export default connect(mapStateToProps)(SearchResult);