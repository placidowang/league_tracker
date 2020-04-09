class CreateSummonerProfileChampionJoiners < ActiveRecord::Migration[6.0]
  def change
    create_table :summoner_profile_champion_joiners do |t|
      t.integer :summoner_profile_id
      t.integer :champion_id

      t.timestamps
    end
  end
end
