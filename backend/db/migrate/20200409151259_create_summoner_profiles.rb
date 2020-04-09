class CreateSummonerProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :summoner_profiles do |t|
      t.string :name

      t.timestamps
    end
  end
end
