class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    before_action :logged_in?

    def encode_token(payload)
        JWT.encode(payload,"my_Sc")
    end

    def decode_token(payload)
        JWT.decode(payload,"my_Sc")[0]["user_id"]
    end

    def logged_in?
        headers = request.headers["Authorization"]
        token = headers.split(" ")[1]
        begin 
            user_id = JWT.decode(token,"my_Sc")[0]["user_id"]
            user = User.find(user_id)
        rescue
            user = nil
        end

        render json: {errors: "Please Login!"} unless user 
    end
end
