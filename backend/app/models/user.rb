class User < ApplicationRecord
    has_secure_password
    
    validates :username, uniqueness: { case_sensitive: false }, presence: true
    validates :password, length: { in: 6..20 }
    validates :password_confirmation, presence: true 
end
