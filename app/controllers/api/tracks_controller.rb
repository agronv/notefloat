class Api::TracksController < ApplicationController 

  def create 
    @track = Track.new(track_params)
    @track.user = current_user
    if @track.save 
      render :show 
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def update 
    @track = Track.find_by(id: params[:id])
    if @track && @track.user = current_user && @track.update(track_params) 
      render :show 
    else
      render json: ["invalid credentials"], status: 422
    end
  end

  def show 
    @track = Track.find_by(id: params[:id])
    if @track
      render :show
    else
      render json: ['track does not exist'], status: 404
    end
  end

  def index 
    @tracks = Track.all
    render :index 
  end

  def destroy 
    track = Track.find_by(id: params[:id])
    if track.user == current_user
      user_id = track.user_id
      render json: ["#{user_id}"]
    else
      render json: ['What do you think your doing'], status: 404
    end
  end

  def track_params 
    params.require(:track).permit(:title, :photo, :mp3_file)
  end
  
end