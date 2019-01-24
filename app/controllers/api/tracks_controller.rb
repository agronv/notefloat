class Api::TracksController < ApplicationController 

  def create 
    if params[:track][:photo]
      @track = Track.new(track_params)
    else 
      @track = Track.new({title: params[:track][:title], mp3_file: params[:track][:mp3_file]})
    end
    @track.user_id = current_user.id
    if @track.save 
      render :show 
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def update 
    @track = Track.find_by(id: params[:id])
    if @track && @track.user_id = current_user.id
      @track.title = track_params[:title]
      @track.photo = track_params[:photo]
      if @track.save
        render :show 
      else
        render json: ["invalid credentials"], status: 422
      end
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
    if track.user_id == current_user.id
      user_id = track.user_id
      track.destroy
      render json: ["#{user_id}"]
    else
      render json: ['What do you think your doing'], status: 404
    end
  end

  def track_params 
    params.require(:track).permit(:title, :photo, :mp3_file)
  end

  def update_params
    params.require(:track).premit(:title, :photo)
  end
  
end