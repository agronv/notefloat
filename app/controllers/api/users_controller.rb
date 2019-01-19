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

  def show 
    @user = User.find_by(id: params[:id])
    render :show
  end

  def index 
    @users = User.all
    render :index 
  end

  def user_params 
    params.require(:user).permit(:username, :password)
  end
  
end