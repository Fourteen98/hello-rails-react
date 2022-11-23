class Api::V1::MessagesController < Api::V1::ApplicationController
  def index
    @messages = Message.order('RANDOM()').limit(1)
    render json: @messages
  end
end
