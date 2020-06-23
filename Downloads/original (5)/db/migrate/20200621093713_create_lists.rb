class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|

      t.string :title, null: false
      t.integer :user_id, foreign_key: true, null: false

      t.timestamps
    end
  end
end
