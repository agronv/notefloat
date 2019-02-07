class Api::CommentsController < ApplicationController 

  def create 
    @comment = Comment.new(user_id: current_user.id, 
    track_id: params[:track_id], 
    body: params[:comment][:body],
    parent_comment_id: params[:comment][:parent_comment_id])
    if @comment.save 
      render :show 
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def destroy 
    comment = Comment.find_by(id: params[:id])
    if current_user.id === comment.user_id
      @track = Track.find_by(id: comment.track_id)
      comment.destroy
      render 'api/tracks/show'
    else
      render json: ['Not valid user'], status: 404 
    end
  end
  
end