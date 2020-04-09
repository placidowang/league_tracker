class CreateChampions < ActiveRecord::Migration[6.0]
  def change
    create_table :champions do |t|
      t.string :name
      t.string :title
      t.string :stats
      t.string :spells

      t.timestamps
    end
  end
end
