import React from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/track_actions';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    this.genres = {
      alternative_rock: [],
      classical: [],
      classic_rock: [],
      pop: [],
      rap: [],
      techno: [],
    };

    this.props.tracks.map((track) => {
      this.genres[`${track.genre}`].push(track);
    });

    let alternative_rock = null;
    if (this.genres.alternative_rock.length > 0) {
      alternative_rock = (
        <div className="genre-section first-genre">
          <h3 className="genre-title">Alternative Rock</h3>
          <ul className="album-covers">
            {this.genres.alternative_rock.map((track) => {
              return < TrackIndexItem track={track} key={track.id} />})}
          </ul>
        </div>
      )
    } 
    let classical = null;
    if (this.genres.classical.length > 0) {
      classical = (
        <div className="genre-section">
          <h3 className="genre-title">Classical</h3>
          <ul className="album-covers">
            {this.genres.classical.map((track) => {
              return < TrackIndexItem track={track} key={track.id} />})}
          </ul>
        </div>
      )
    } 
    let classic_rock = null;
    if (this.genres.classic_rock.length > 0) {
      classic_rock = (
        <div className="genre-section">
          <h3 className="genre-title">Classic Rock</h3>
          <ul className="album-covers">
            {this.genres.classic_rock.map((track) => {
              return < TrackIndexItem track={track} key={track.id} />})}
          </ul>
        </div>
      )
    } 
    let pop = null;
    if (this.genres.pop.length > 0) {
      pop = (
        <div className="genre-section">
          <h3 className="genre-title">Pop</h3>
          <ul className="album-covers">
            {this.genres.pop.map((track) => {
              return < TrackIndexItem track={track} key={track.id} />})}
          </ul>
        </div>
      )
    } 
    let rap = null;
    if (this.genres.rap.length > 0) {
      rap = (
        <div className="genre-section">
          <h3 className="genre-title">Rap</h3>
          <ul className="album-covers">
            {this.genres.rap.map((track) => {
              return < TrackIndexItem track={track} key={track.id} />})}
          </ul>
        </div>
      )
    } 
    let techno = null;
    if (this.genres.techno.length > 0) {
      techno = (
        <div className="genre-section last-genre">
          <h3 className="genre-title">Techno</h3>
          <ul className="album-covers">
            {this.genres.techno.map((track) => {
              return < TrackIndexItem track={track} key={track.id} />})}
          </ul>
        </div>
      )
    } 
    
    return (
      <div className="bigger-index-div">
        <section className="tracks-section">
          {alternative_rock}
          {classical}
          {classic_rock}
          {pop}
          {rap}
          {techno}
        </section>
      </div>
    )
  }
}

const msp = (state) => {
  return {
    tracks: Object.values(state.entities.tracks),
  }
}

const mdp = (dispatch) => {
  return {
    fetchTracks: () => dispatch(fetchTracks()),
  }
}

export default connect(msp, mdp)(TrackIndex)

