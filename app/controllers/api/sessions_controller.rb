class Api::SessionsController < ApplicationController 

  def create 
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    unless @user.respond_to?(:to_str)
      log_in(@user)
      render 'api/users/show' 
    else
      render json: [@user], status: 401
    end
  end

  def destroy 
    if !current_user 
      render json: ['No current user'], status: 404 
    else
      current_user.reset_session_token!
      session[:session_token] = nil
      current_user = nil 
      render json: {}
    end
  end

  def user_params 
    params.require(:user).permit(:username, :password)
  end
  
end