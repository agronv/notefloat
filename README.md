# NoteFloat 

NoteFloat is a SoundCloud inspired web application. Users can upload their own music, as well as listion to and comment on 
others' music.

The backend Implements Rails, with a combinatin of ActiveStorage and AWS to manage user uploads.
The frontend uses React and Redux to handle state.

## Custom Audio Bar/ Continous Play 
------

The HTML5 audio tag is notoriously uncustomizable. I made my own audio component that gave me all the utility and styling I was
looking for, as follows: 

* A styled audio / volume bar
* The ablitity to seek through the track
* The ability to go to the next and previous track on click, and to repeat and shuffle 

I accomplished the first by having two div tags follow the progression of the track by the percent of completion.
I accomplished the second by having a transparent input[type=range] tag with a z-index greater than and directly ontop of my div.
I accomplished the last by having a queue of track ids that have been played and that have been yet to be played 

```javascript
setTime(e) {
    this.audioRef.current.currentTime = e.target.value;
    this.setState({ currentTime: e.target.value });
}

<div className="progress-bar">
    <input type="range" className="music-progress-bar" min="0" max={length} step="0.25" onChange={this.setTime}/>
    <div className="outer-music-bar">
        <div className="inner-music-bar" style={{width: `${100*(currentTime/length) || 1}%`}}></div>
        <div className="progress-ball" style={{ left: `${100 * (currentTime / length) || 1}%` }}></div>
    </div>
</div>
```

For continous play, I created a seperate slice of state to keep track of the current track playing with all its information, along with songs 
to be played and songs that have been played through my queue which only holds track ids. 

```javascript
nextTrack() {
    const { queue, queuePos, currentTrack, fetchNextTrack, nextInQueue, fetchRandomNextTrack } = this.props;
    if (this.state.loop) this.audioRef.current.currentTime = 0;
    else if (queuePos === queue.length - 1) {
        if (this.state.shuffle) fetchRandomNextTrack();
        else fetchNextTrack(currentTrack.genre);
    }
    else nextInQueue(queue[queuePos+1]);
    this.audioRef.current.currentTime = 0;
}

case RECEIVE_NEXT_TRACK:
    newState.currentTrack = action.track;
    newState.queue.push(action.track.id);
    newState.queuePos = newState.queue.length - 1;
    newState.time = 0;
    return newState;
```

## WaveForm / WaveForm Seek
------

![Track Show](app/assets/images/waveform.png)

Users can view the decibel level of the track by going to the track's show page. The WaveForm will progress along with the audio component so users can follow along 
with the song from multiple sources. I used the package wavesurfer to get the wave, but rather than letting the wavesurfer play audio as is intended I sent the current
time of the track from the audio component to the waveform component and let the waveform follow the progression of the track simply through the current time.

```javascript
componentDidUpdate(prevProps) {
    if (this.props.currentTrack && this.props.track.id === this.props.currentTrack.id) {
      if (prevProps.time !== this.props.time) {
        this.waveSurfer.seekTo(this.props.time / this.props.length);
      }
    }
    else {
      this.waveSurfer.seekTo(0);
    }
}
```

Users can also seek through a certain point in the song as well as play the track by simply clicking on the waveform. I accomplished this by turning on 
the event listener for seeking on the waveform on click and in the call back function of the event listener I seeked to the certain point in the song and 
immediately turned off the event listener.


```javascript
handleClick(e) {
    this.waveSurfer.on('seek', this.handleChange);
}
  
handleChange(e) {
    if (this.props.currentTrack.id !== this.props.track.id) {
      this.props.receiveNextTrack(this.props.track);
    }
    this.props.setWaveTime(this.waveSurfer.getCurrentTime());
    this.waveSurfer.un('seek', this.handleChange);
}
```

## Track CRUD
------

![User Show](app/assets/images/users_show.png)

Only logged in users can upload and comment on tracks. I provided both front end and backend validation so that only the user who created the track can edit 
and delete the track. On track upload I have front end validations to ensure that the audio file is in fact an audio file and that the audio file isn't too 
large. I also found the length of the audio file on upload by creating a temporary audio tag with the source being the file that was just uploaded.

```javascript
const file = e.target.files[0];
const objectURL = URL.createObjectURL(file);
const audio = new Audio([objectURL]); 
const that = this;
var timer = setInterval(function () {
    if (audio.readyState === 4) {
    that.setState({ length: Math.floor(audio.duration)});
    clearInterval(timer);
    }
}, 500);
this.setState({ [feild]: file });
```