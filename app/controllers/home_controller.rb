class HomeController < ApplicationController

  def index
    @todos = Todo.all

    respond_to do |format|
      format.html
      format.json { render :json => @todos }
    end
  end

  def show
    @todos = Todo.all

    respond_to do |format|
      format.html
      format.json { render :json => @todos }
    end
  end


  def create
    @todo = Todo.new(todo: params[:todo])
    respond_to do |format|
      if @todo.save
        format.html { redirect_to root_url }
        format.json { render :json => @todo }
      end
    end
  end


end
