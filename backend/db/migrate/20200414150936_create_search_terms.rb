class CreateSearchTerms < ActiveRecord::Migration[6.0]
  def change
    create_table :search_terms do |t|

      t.timestamps
    end
  end
end
