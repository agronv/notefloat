class Api::TracksController < ApplicationController 

  def random
    @track = Track
    .includes(:user)
    .with_attached_photo
    .with_attached_mp3_file
    .where("genre = '#{params[:genre]}'")
    .order("RANDOM()").first 
    render :complete_show 
  end

  def complete_random
    @track = Track
    .includes(:user)
    .with_attached_photo
    .with_attached_mp3_file
    .order("RANDOM()")
    .first 
    render :complete_show 
  end

  def splash_tracks
    @tracks = Track
    .includes(:user)
    .with_attached_photo
    .order("RANDOM()")
    .limit(12) 
    render :splash_tracks 
  end

  def create 
    @track = Track.new(track_params)
    @track.user_id = current_user.id 
    if @track.save 
      render :show 
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def update 
    @track = Track.find_by(id: params[:id])
    if @track && @track.user_id == current_user.id
      if @track.update(update_params)
        render :show 
      else
        render json: ["invalid information"], status: 422
      end
    else
      render json: ["invalid information"], status: 422
    end
  end

  def show 
    @track = Track
    .includes(:user)
    .includes(:comments)
    .includes(:comment_user)
    .includes(:parent_comments)
    .with_attached_photo
    .with_attached_mp3_file
    .find(params[:id])
    if @track
      render :show
    else
      render json: ['track does not exist'], status: 404
    end
  end

  def complete_show 
    @track = Track
    .includes(:user)
    .with_attached_photo
    .with_attached_mp3_file
    .find(params[:id])
    if @track
      render :complete_show
    else
      render json: ['track does not exist'], status: 404
    end
  end

  def index 
    @tracks = Track
    .includes(:user)
    .with_attached_photo
    render :index 
  end

  def destroy 
    track = Track.find_by(id: params[:id])
    if track.user_id == current_user.id
      user_id = track.user_id
      track.destroy
      render json: ["#{user_id}"]
    else
      render json: ['What do you think your doing'], status: 404
    end
  end

  def track_params 
    params.require(:track).permit(:title, :photo, :mp3_file, :genre, :length)
  end

  def update_params
    params.require(:track).permit(:title, :photo, :genre)
  end
  
end