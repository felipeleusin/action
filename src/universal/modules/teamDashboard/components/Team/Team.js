import React, {PropTypes} from 'react';
import FontAwesome from 'react-fontawesome';
import {
  DashContent,
  DashHeader,
  DashLayout,
  DashMain,
  DashSidebar
} from 'universal/components/Dashboard';

const faIconStyle = {
  fontSize: '14px',
  lineHeight: 'inherit',
  marginRight: '.25rem'
};

const linkStyle = {
  display: 'inline-block',
  height: '15px',
  lineHeight: '15px',
  marginRight: '1.5rem',
  textDecoration: 'none'
};

const Team = (props) => {
  const {dispatch, teamId, user} = props;
  const goToLink = (e) => {
    e.preventDefault();
    console.log('TODO: Go to link');
  };

  return (
    <DashLayout title="Team Dashboard">
      <DashSidebar
        activeArea="team"
        activeTeamId={teamId}
        dispatch={dispatch}
        user={user}
      />
      <DashMain>
        <DashHeader title="Team Name">
          <a
            href={`/meeting/${teamId}`}
            style={linkStyle}
            title="Meeting Lobby"
          >
            <FontAwesome name="arrow-circle-right" style={faIconStyle} /> Meeting Lobby
          </a>
          <a
            href="#"
            onClick={goToLink}
            style={linkStyle}
            title="Team Settings"
          >
            <FontAwesome name="cog" style={faIconStyle} /> Team Settings
          </a>
        </DashHeader>
        <DashContent>
          Team Outcomes
        </DashContent>
      </DashMain>
    </DashLayout>
  );
};

Team.propTypes = {
  dispatch: PropTypes.func.isRequired,
  teamId: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    preferredName: PropTypes.string,
  })
};

export default Team;
