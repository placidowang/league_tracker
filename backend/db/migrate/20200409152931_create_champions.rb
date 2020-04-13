class CreateChampions < ActiveRecord::Migration[6.0]
  def change
    create_table :champions do |t|
      t.string :name
      t.string :title
      t.json :stats
      t.json :spells, array: true

      t.timestamps
    end
  end
end
