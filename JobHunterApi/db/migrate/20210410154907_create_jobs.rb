class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :company
      t.string :type
      t.string :location
      t.string :description
      t.string :url

      t.timestamps
    end
  end
end
