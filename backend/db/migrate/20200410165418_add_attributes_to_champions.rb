class AddAttributesToChampions < ActiveRecord::Migration[6.0]
  def change
    add_column :champions, :key, :string
    add_column :champions, :blurb, :string
    add_column :champions, :info, :string
    add_column :champions, :roles, :string
    add_column :champions, :partype, :string
    add_column :champions, :icon_image, :string
    add_column :champions, :skins, :string
    add_column :champions, :lore, :string
    add_column :champions, :allytips, :string
    add_column :champions, :enemytips, :string
    add_column :champions, :passive, :string
  end
end
