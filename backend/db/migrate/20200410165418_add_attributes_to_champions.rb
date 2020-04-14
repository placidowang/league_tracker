class AddAttributesToChampions < ActiveRecord::Migration[6.0]
  def change
    add_column :champions, :key, :string
    add_column :champions, :blurb, :string
    add_column :champions, :info, :json
    add_column :champions, :roles, :string, array: true
    add_column :champions, :partype, :string
    add_column :champions, :icon_image, :string
    add_column :champions, :skins, :json, array: true
    add_column :champions, :lore, :string
    add_column :champions, :allytips, :string, array: true
    add_column :champions, :enemytips, :string, array: true
    add_column :champions, :passive, :json
    add_column :champions, :videoId, :string
  end
end
