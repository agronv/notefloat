class Api::UsersController < ApplicationController 

  def create 
    @user = User.new(user_params)
    if @user.save 
      log_in(@user)
      render :show 
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def edit 
    @user = User.find_by(id: params[:id])
    if @user.update(update_params)
      render :complete_show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show 
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render json: ['User does not exist'], status: 404
    end
  end

  def complete_show 
    @user = User.find_by(id: params[:id])
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
    params.require(:user).permit(:photo, :password, :description)
  end
  
end