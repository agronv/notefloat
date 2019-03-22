class Api::UsersController < ApplicationController 

  def create 
    debugger
    puts "HEAWKJFSKjhfAKSJfAKLshfKJHSKDJKHKDHJKjhKJHSDKFJHASKDJFHASKJHFAKSJDHFSAKDHFASKHFSKH"
    @user = User.new(user_params)
    if @user.save 
      log_in(@user)
      render :show 
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update 
    @user = User.find_by(id: params[:id])
    if @user && @user.id == current_user.id
      if @user.update(update_params)
        render :complete_show
      else  
        render json: @user.errors.full_messages, status: 422
      end
    else
      render json: ["invalid information"], status: 422
    end
  end

  def show 
    @user = User
    .with_attached_photo
    .find(params[:id])
    if @user
      render :show
    else
      render json: ['User does not exist'], status: 404
    end
  end

  def complete_show 
    @user = User
    .includes(:tracks)
    .includes(track_photos: :blob)
    .with_attached_photo
    .find(params[:id])
    if @user
      render :complete_show
    else
      render json: ['User does not exist'], status: 404
    end
  end

  def index 
    @users = User.all
    render :index 
  end

  def user_params 
    params.require(:user).permit(:username, :password)
  end

  def update_params 
    params.require(:user).permit(:photo, :description)
  end
  
end