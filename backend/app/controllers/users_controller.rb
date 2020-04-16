class UsersController < ApplicationController

    skip_before_action :logged_in?, only: [:signup,:login,:update]

    def signup
        @user = User.new(user_params)
        if @user.save 
           render json: {user: UserSerializer.new(@user)} , status: :created
        else
           errors_message = @user.errors.messages
           render json: {errors: errors_message} , status: :not_acceptable
        end
    end

    def login 
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            render json: {username: @user.username, token: encode_token({user_id: @user.id})}
        else
            render json: {errors: "Invalid Username or Password"}
        end
    end 

    # def update
    #     @user = User.find(params[:id])
    #     if @user.update(username: "somename")
    #         render json: @user
    #     else
    #         render json: {errors: "can't save"}
    #     end
    # end

    private 
        def user_params
            params.permit(:username, :password , :password_confirmation) 
        end 
end
