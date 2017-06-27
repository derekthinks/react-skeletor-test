import { connect } from 'react-redux';
import { compose } from 'recompose';
import { loadable } from 'react-kinetic-core';
import { actions } from '../../redux/modules/team';

import { TeamView } from './TeamView';

export const mapStateToProps = ({ profile, current_team }) => ({
  team: current_team.data,
  loading: current_team.loading,
  errors: current_team.errors,
  profile,
});
export const mapDispatchToProps = actions;

export const TeamContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  loadable({
    onMount: props => props.match.params.teamSlug !== 'new' && props.fetchTeam(props.match.params.teamSlug),
    onUnmount: props => props.clearTeam(),
  }),
)(TeamView);
